import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _FieldSet: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  comments: Array<Comments>;
  id: Scalars['ID']['output'];
};

export type Author = {
  __typename?: 'Author';
  comments: Array<Comments>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Comments = {
  __typename?: 'Comments';
  article?: Maybe<Article>;
  articleId: Scalars['ID']['output'];
  author?: Maybe<Author>;
  authorId: Scalars['ID']['output'];
  authorName?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCommentsByAuthor: Array<Comments>;
  getCommentsOnArticle: Array<Comments>;
};


export type QueryGetCommentsByAuthorArgs = {
  authorId: Scalars['ID']['input'];
};


export type QueryGetCommentsOnArticleArgs = {
  articleId: Scalars['ID']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Article: ResolverTypeWrapper<Article>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Author: ResolverTypeWrapper<Author>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Comments: ResolverTypeWrapper<Comments>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Article: Article;
  ID: Scalars['ID']['output'];
  Author: Author;
  String: Scalars['String']['output'];
  Comments: Comments;
  Query: {};
  Boolean: Scalars['Boolean']['output'];
}>;

export type ContactDirectiveArgs = {
  description?: Maybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  url?: Maybe<Scalars['String']['input']>;
};

export type ContactDirectiveResolver<Result, Parent, ContextType = DataSourceContext, Args = ContactDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ArticleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Article']>, { __typename: 'Article' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comments']>, { __typename: 'Article' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Author']>, { __typename: 'Author' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comments']>, { __typename: 'Author' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;

  name?: Resolver<Maybe<ResolversTypes['String']>, { __typename: 'Author' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comments'] = ResolversParentTypes['Comments']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Comments']>, { __typename: 'Comments' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  articleId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authorName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getCommentsByAuthor?: Resolver<Array<ResolversTypes['Comments']>, ParentType, ContextType, RequireFields<QueryGetCommentsByAuthorArgs, 'authorId'>>;
  getCommentsOnArticle?: Resolver<Array<ResolversTypes['Comments']>, ParentType, ContextType, RequireFields<QueryGetCommentsOnArticleArgs, 'articleId'>>;
}>;

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Article?: ArticleResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Comments?: CommentsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = DataSourceContext> = ResolversObject<{
  contact?: ContactDirectiveResolver<any, any, ContextType>;
}>;
