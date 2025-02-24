#!/usr/bin/env node

import { ocr } from "./index.js";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Usage: freeocr <image-path>");
  process.exit(1);
}

const filePath = args[0];

ocr({ filePath })
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
