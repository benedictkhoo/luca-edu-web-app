export interface Question {
  id?: string;
  title: string;
  content: number;
  comments?: number;
  liked?: boolean;
  disliked?: boolean;
  starred?: boolean;
}