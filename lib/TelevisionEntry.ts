export interface TelevisionEntry {
  /** 整理番号 */
  no: number;
  /** 番組名 */
  title: string;
  /** 副題 */
  subtitle: string | null;
  /** 放送日 (undefined: 放送日不明) */
  date: string | null;
}
