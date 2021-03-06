import { getAuthors, getArticles } from '../DataApi';
import { data } from '../testData';


describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = getArticles(data);
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = getAuthors(data);
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });

});
