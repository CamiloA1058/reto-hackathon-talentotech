// content-based-recommender.d.ts
declare module "content-based-recommender" {
  interface Document {
    id: string;
    content: string;
  }

  interface RecommenderOptions {
    minScore?: number;
    maxSimilarDocuments?: number;
  }

  class ContentBasedRecommender {
    constructor(options?: RecommenderOptions);
    train(documents: Document[]): void;
    getSimilarDocuments(id: string, start?: number, limit?: number): Document[];
  }

  export = ContentBasedRecommender;
}
