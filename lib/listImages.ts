export async function listImages(): Promise<string[]> {
  // find photos
  const dirPath = "./public/photos";
  const fs = (await import("fs")).promises;
  return (await fs.readdir(dirPath)).map((name) => `/photos/${name}`);
}
