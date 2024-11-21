import { Config } from "./src/config";
import * as fs from "fs";
import * as path from "path";

const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
const outputDir = path.join("outputs", currentDate);

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const maxPagesToCrawl = parseInt(process.env.MAX_PAGES_TO_CRAWL ?? "500", 10);

export const defaultConfig: Config[] = [
    {
        url: "https://docs.databricks.com/en/machine-learning/index.html",
        match: "https://docs.databricks.com/en/generative-ai/agent-framework/**",
        maxPagesToCrawl: maxPagesToCrawl,
        outputFileName: path.join(outputDir, "generative-ai-content.json"),
        maxTokens: 2000000,
    },
    {
        url: "https://docs.databricks.com/en/machine-learning/index.html",
        match: [
            "https://docs.databricks.com/en/mlflow/**",
            "https://docs.databricks.com/en/machine-learning/manage-model-lifecycle/**",
            "https://docs.databricks.com/en/machine-learning/mlops/**"
        ],
        maxPagesToCrawl: maxPagesToCrawl,
        outputFileName: path.join(outputDir, "mlflow.json"),
        maxTokens: 2000000,
    },
    {
        url: "https://docs.databricks.com/en/machine-learning/foundation-models/retired-models-policy.html",
        match: [
            "https://docs.databricks.com/en/machine-learning/foundation-models/**",
        ],
        maxPagesToCrawl: maxPagesToCrawl,
        outputFileName: path.join(outputDir, "foundation-model-policy.json"),
        maxTokens: 2000000,
    },
    {
        url: "https://docs.databricks.com/en/machine-learning/serve-models.html",
        match: [
            "https://docs.databricks.com/en/generative-ai/**",
            "https://docs.databricks.com/en/ai-gateway/**",
            "https://docs.databricks.com/en/machine-learning/model-serving/**",
            "https://docs.databricks.com/en/machine-learning/model-inference/**",
        ],
        maxPagesToCrawl: maxPagesToCrawl,
        outputFileName: path.join(outputDir, "model-serving.json"),
        maxTokens: 2000000,
    },
];