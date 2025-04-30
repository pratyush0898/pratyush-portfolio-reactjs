import React from 'react';
import { fetchAPI } from '../api/dev.to.js';

const DEV_TO_API_URL = 'https://dev.to/api/articles';

const list = await fetchAPI(DEV_TO_API_URL);
const rawArticles = await Promise.all(
  list.map(({ id }) => fetchAPI(`${DEV_TO_API_URL}/${id}`))
);

const myArticles = rawArticles.map((a) => {
  // pre-format date once
  const date = new Date(a.published_at).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return function article() {
    return {
      date: date,
      title: a.title,
      description: a.description,
      keywords: a.tags,
      style: ``,
      body: (
        <React.Fragment>
          <div dangerouslySetInnerHTML={{ __html: a.body_html }} />
        </React.Fragment>
      ),
    };
  };
});

export default myArticles;