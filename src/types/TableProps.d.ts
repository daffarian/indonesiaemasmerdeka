import { Article } from "./Article";

export interface TableProps<T> {
  columns: Column[];
  data?: T[];
  className?: string;
}

export interface ShareStoriesTableProps{
  data?: Article[];
  className?: string;
}
