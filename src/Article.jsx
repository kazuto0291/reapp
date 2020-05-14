import React from 'react';
import LikeButton from "./LikeButton"

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
      <label htmlFor="check">公開状態</label>
      <input type="checkbox" checked={porps.isPublished} id="check"/>
      <p>著者:{porps.author}</p>
      <p>{publishState}</p>
      <LikeButton count={porps.count}/>
    </>
  )
};

export default Article;