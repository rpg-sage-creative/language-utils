import { readDataFile } from "./readDataFile.js";
export function readWordPairs(filePath, orFileName) {
    const raw = readDataFile(filePath, orFileName);
    if (raw) {
        return raw.split("\n").map(line => line.split(",").map(word => word.trim()));
    }
    return [];
}
