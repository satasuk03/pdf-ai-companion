import { Model } from "../constants";

export abstract class ModelWrapper{
    protected apiKey: string;
    protected model: Model;

    constructor(model: Model,apiKey: string) {
        this.apiKey = apiKey;
        this.model = model;
    }

    abstract generateText(prompt: string): Promise<string>;
}