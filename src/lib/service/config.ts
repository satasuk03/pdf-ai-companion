const CONFIG_KEYS = {
    API_KEY: 'apiKey',
    MODEL: 'model'
} as const;

export function saveApiKey(apiKey: string): void {
    localStorage.setItem(CONFIG_KEYS.API_KEY, apiKey);
}

export function getApiKey(): string | null {
    return localStorage.getItem(CONFIG_KEYS.API_KEY);
}

export function clearApiKey(): void {
    localStorage.removeItem(CONFIG_KEYS.API_KEY);
} 

export function saveModel(model: string): void {
    localStorage.setItem(CONFIG_KEYS.MODEL, model);
}

export function getModel(): string | null {
    return localStorage.getItem(CONFIG_KEYS.MODEL);
}