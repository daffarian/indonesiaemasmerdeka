import { Article } from "./Article";
import { Faq } from "./Faq";

export interface TableProps<T> {
  columns: Column[];
  data?: T[];
  className?: string;
}

export interface ShareStoriesTableProps{
  data: Article[];
  className?: string;
}

export interface FaqTableProps{
  data: Faq[];
  className?: string;
}
