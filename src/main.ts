import { defaultConfig } from "../config.js";
import { crawl, write } from "./core.js";

for (const config of defaultConfig) {
  await crawl(config);
  await write(config);
}