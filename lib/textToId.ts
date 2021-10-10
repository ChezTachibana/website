export function textToId(text: string) {
  if (typeof text !== "string" || text.length <= 0) {
    return null;
  }
  return text.split(" ").join("_");
}
