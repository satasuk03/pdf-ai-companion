import Anthropic from '@anthropic-ai/sdk';
import { ModelWrapper } from "./base"
import { Model } from "../constants"

export class ClaudeModelWrapper extends ModelWrapper{
    #anthropic: Anthropic;

    constructor(apiKey: string, model: Model){
        super(model, apiKey);
        this.#anthropic = new Anthropic({
            apiKey,
            dangerouslyAllowBrowser: true,
        });
    }

    async generateText(prompt: string): Promise<string> {
        const response = await this.#anthropic.messages.create({
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 1000,
            model: this.model,
        });
        const text = response.content.filter(block => block.type === 'text').map(block => block.text).join('');
        return text;
    
    }
}