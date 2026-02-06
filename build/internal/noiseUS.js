let _noiseUS;
export function getNoiseUS() {
    return _noiseUS ??= new Set();
}
export function isNoiseUS(word) {
    return word ? _noiseUS?.has(word) ?? false : false;
}
