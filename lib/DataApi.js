const mapIntoObject = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
};

const getArticles = (rawData) => {
  return mapIntoObject(rawData.articles);
};

const getAuthors = (rawData) => {
  return mapIntoObject(rawData.authors);
};

export {
  getAuthors,
  getArticles
};
