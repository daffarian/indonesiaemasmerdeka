export interface TableProps<T> {
  columns: Column[];
  data?: T[];
  className?: string;
  type: "display" | "edit";
}