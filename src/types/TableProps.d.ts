import { PrivasiPolicy } from "./PrivasiPolicy.d";
import { Article } from "./Article";
import { Faq } from "./Faq";
import { UserTerms } from "./UserTerms";

export interface TableProps<T> {
  columns: Column[];
  data?: T[];
  className?: string;
}

export interface ShareStoriesTableProps {
  data: Article[];
  className?: string;
}

export interface FaqTableProps {
  data: Faq[];
  className?: string;
}

export interface PrivasiPolicyTableProps {
  data: PrivasiPolicy[];
  className?: string;
}

export interface UserTermsTableProps {
  data: UserTerms[];
  className?: string;
}
