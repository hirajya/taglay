import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../article-content.js';
import NotFoundPage from './NotFoundPage';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return <NotFoundPage />;
  }

  const words = article.content.join(' ').split(' ').length;
  const minutes = Math.max(2, Math.ceil(words / 70));

  return (
    <div className="page article-page">
      <div className="page-header">
        <p className="eyebrow">Article</p>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span className="pill">React</span>
          <span className="muted">{minutes} min read</span>
        </div>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas blandit
          fringilla platea quam vel.
        </p>
      </div>

      <div className="article-body">
        {article.content.map((paragraph, idx) => (
          <p key={`${article.name}-${idx}`}>{paragraph}</p>
        ))}
        <div className="card callout">
          <h3>Want another angle?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet nisl eu condimentum
            tincidunt pulvinar sed commodo.
          </p>
          <Link to="/articles" className="button-link primary">
            Browse more articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
