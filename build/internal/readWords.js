import { readDataFile } from "./readDataFile.js";
export function readWords(filePath, orFileName) {
    const raw = readDataFile(filePath, orFileName);
    if (raw) {
        return raw.split("\n").map(word => word.trim());
    }
    return [];
}
