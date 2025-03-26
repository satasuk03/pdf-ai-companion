import { Model } from "./constants";
import { ClaudeModelWrapper } from "./models/claude";

export const getModel = (model: Model, apiKey: string) => {
    switch (model) {
        case Model.CLAUDE_3_5_SONNET:
        case Model.CLAUDE_3_7_SONNET:
            return new ClaudeModelWrapper(apiKey, model);
        default:
            throw new Error(`Model ${model} not supported`);
    }
}