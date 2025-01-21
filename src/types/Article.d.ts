export interface Article {
  id:number;
  title:string;
  slug:string;
  description:string;
  content:string;
  created_at:Date;
  updated_at:Date;
  image_url:string;
  category: string;
  status: "published" | "draft"
}