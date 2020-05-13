import React from 'react';

const Article = (porps) => {
  let publishState = "";
  if (porps.isPublished) {
    publishState = "公開"
  } else {
    publishState = "非公開"
  }
  return (
    <>
      <h2>{porps.title}</h2>
      <p>順番は{porps.order}です。</p>
      <p>著者:{porps.author}</p>
      <p>{publishState}</p>
    </>
  )
};

export default Article;