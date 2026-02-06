import type { Optional } from "@rsc-utils/type-utils";

let _noiseUS: Set<string>;

/** @internal */
export function getNoiseUS(): Set<string> {
	return _noiseUS ??= new Set();
}

/** @internal */
export function isNoiseUS(word: Optional<string>): boolean {
	return word ? _noiseUS?.has(word) ?? false : false;
}
