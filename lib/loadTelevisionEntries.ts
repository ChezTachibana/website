import { TelevisionEntry } from "./TelevisionEntry";

export async function loadTelevisionEntries(
  filePath: string
): Promise<TelevisionEntry[]> {
  const data = (
    await (await import("fs")).promises.readFile(filePath)
  ).toString();
  return data
    .split("\n")
    .filter(
      (line) =>
        line.length > 0 && line.indexOf("No.,番組名,副題,放送年月日") < 0
    )
    .map((line) => {
      const [no, title, subtitle, date] = line.trim().split(",");
      return {
        no: parseInt(no),
        title,
        subtitle: (subtitle.length > 0 && subtitle) || null,
        date: (date.length > 0 && date) || null,
      };
    });
}
