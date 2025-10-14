import { ICommentsAPI } from "../data-sources/comments.api";
export interface DataSourceContext {
  authToken?: string;
  commentsApi: ICommentsAPI;
}
