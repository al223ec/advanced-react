import React from 'react';

import ArticleList from './ArticleList';

import { getArticles, getAuthors} from '../DataApi';
import { data } from '../testData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: getArticles(data),
      authors: getAuthors(data),
    };
  }
  articleActions = {
    lookupAuthor: (id) => this.state.authors[id],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
