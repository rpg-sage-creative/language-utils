let _UKtoUS;
export function getUKtoUS() {
    return _UKtoUS ??= new Map();
}
export function ukToUS(uk) {
    return uk ? _UKtoUS?.get(uk) : undefined;
}
export function hasUKtoUS(uk) {
    return uk ? _UKtoUS?.has(uk) ?? false : false;
}
