const DEV_TO_API_URL = "https://dev.to/api/articles";

const fetchAPI = async (url) => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:" + error);
        return "Error fetching data:" + error;
    }
};

const saveID = async (url) => {
    try {
        const data = await fetchAPI(url);
        // Extract array of ids
        const ids = data.map(article => article.id);
        return ids;
    } catch (error) {
        console.error("Error saving IDs:", error);
        return [];
    }
};

const fetchArticlesByIds = async (ids) => {
    try {
        const articles = await Promise.all(
            ids.map(async (id) => {
                const article = await fetchAPI(`${DEV_TO_API_URL}/${id}`);
                return article;
            })
        );
        return articles;
    } catch (error) {
        console.error("Error fetching articles by IDs:", error);
        return [];
    }
};

// Global variables
let ids = [];
let articles = [];

// Example usage
(async () => {
    ids = await saveID(DEV_TO_API_URL);
    articles = await fetchArticlesByIds(ids);
    console.log(articles);
})();

const formattedArticles = articles.map((a) => {
  const date = new Date(a.published_at).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return {
    date: date,
    title: a.title,
    description: a.description,
    keywords: a.tags,
    style: ``,            // Add per-article CSS here
    bodyHtml: a.body_html,
  };
});

console.log(formattedArticles);


export default formattedArticles;
export { fetchAPI, articles, saveID, fetchArticlesByIds };