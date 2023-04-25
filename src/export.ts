import * as fs from "fs";
import { GlobalMainfest_v0_7_5_demo } from "./versions/0.7.5-demo/types";
import { snapshot } from "./versions/0.7.5-demo/manifest";

export const buildJSON = ({
  manifest,
}: {
  manifest: GlobalMainfest_v0_7_5_demo;
}) => {
  const now = new Date().toISOString();
  const formattedMessage = `${now} - Building Semver ${manifest.semver}`;
  console.log(formattedMessage);
  const folderPath = `./builds/${manifest.semver.id}/`;
  const filePath = `${folderPath}${now}_${manifest.semver.id}_manifest.json`;
  console.log(`Writing to ${filePath}`);
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    fs.writeFileSync(filePath, JSON.stringify(manifest));
  } catch (err) {
    console.error(err);
  }
};

buildJSON({
  manifest: snapshot,
});

// npx ts-node  --project ./exporter.tsconfig.json src/export.ts
