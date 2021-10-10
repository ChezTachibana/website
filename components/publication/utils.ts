import { PublicationEntry } from "../../lib/PublicationEntry";

export function titleLength({ title }: PublicationEntry) {
  return title ? (typeof title === "string" ? title : title.primary).length : 0;
}
export function imageLength({ images }: PublicationEntry) {
  return Array.isArray(images) ? images.length : 0;
}
