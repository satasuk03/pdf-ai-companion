const CONFIG_KEYS = {
    API_KEY: 'apiKey'
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