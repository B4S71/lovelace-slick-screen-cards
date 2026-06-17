const fs = require('fs');
const path = require('path');

const resourceFilePath = process.env.HA_LOVELACE_RESOURCES_PATH
  ? path.resolve(process.env.HA_LOVELACE_RESOURCES_PATH)
  : path.resolve(process.cwd(), '../../../.storage/lovelace_resources');

const resourceUrlPrefix = '/local/private/lovelace-slick-screen-cards/dist/slick-screen-cards.js';
const nextVersion = `x${Date.now()}`;

function main() {
  if (!fs.existsSync(resourceFilePath)) {
    console.warn(`[bump-resource-query] Skipping: resource file not found at ${resourceFilePath}`);
    return;
  }

  const raw = fs.readFileSync(resourceFilePath, 'utf8');
  const storage = JSON.parse(raw);
  const items = storage?.data?.items;

  if (!Array.isArray(items)) {
    throw new Error(`Unexpected lovelace_resources format in ${resourceFilePath}`);
  }

  const resource = items.find((item) => typeof item?.url === 'string' && item.url.startsWith(resourceUrlPrefix));
  if (!resource) {
    console.warn(`[bump-resource-query] Skipping: no matching resource for ${resourceUrlPrefix}`);
    return;
  }

  resource.url = `${resourceUrlPrefix}?v=${nextVersion}`;
  fs.writeFileSync(resourceFilePath, `${JSON.stringify(storage, null, 2)}\n`, 'utf8');

  console.log(`[bump-resource-query] Updated Lovelace resource to ${resource.url}`);
}

main();