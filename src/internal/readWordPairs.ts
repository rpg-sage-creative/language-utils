import type { Optional } from "@rsc-utils/type-utils";
import { readDataFile } from "./readDataFile.js";

/**
 * @internal
 * For reading word pairs, such as ukToUS.
 */
export function readWordPairs(filePath: Optional<string>, orFileName: string): [string, string][] {
	const raw = readDataFile(filePath, orFileName);
	if (raw) {
		return raw.split("\n").map(line => line.split(",").map(word => word.trim()) as [string, string]);
	}
	return [];
}