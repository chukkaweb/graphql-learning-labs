import { IArticleApi } from "../data-sources/article.api";
export interface DataSourceContext {
  authToken?: string;
  articleApi: IArticleApi;
}
