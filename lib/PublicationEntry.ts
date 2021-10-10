import { PublicationTitle } from "./PublicationTitle";

export interface PublicationEntry {
  id: string;
  title: PublicationTitle;
  revisedTitle?: PublicationTitle;
  images?: string[];
}
