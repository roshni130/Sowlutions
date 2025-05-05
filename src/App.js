import React, { useState } from 'react';
import './App.css';

const articles = [
  {
    title: 'Understanding the difference between grid-template and grid-auto',
    date: 'Oct 09, 2018',
    content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns.',
  },
  {
    title: 'Recreating the GitHub Contribution Graph with CSS Grid Layout',
    date: 'Sep 15, 2019',
    content: 'Learn how to use CSS Grid to replicate the GitHub contributions graph with just HTML and CSS.',
  },
  // Add more articles if you'd like
];

function App() {
  const [query, setQuery] = useState('');

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? <mark key={i}>{part}</mark> : part
    );
  };

  const filteredArticles = articles.filter(
    ({ title, content }) =>
      title.toLowerCase().includes(query.toLowerCase()) ||
      content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p><strong>{filteredArticles.length}</strong> posts were found.</p>
      {filteredArticles.map((article, index) => (
        <div key={index} className="article">
          <h2>{highlightText(article.title, query)}</h2>
          <p className="date">{article.date}</p>
          <p>{highlightText(article.content, query)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
