import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-page bg-main min-h-screen">
      <Navbar />
      <div className="blog-container mx-auto max-w-4xl text-center px-4 py-8">
        <h1 className="text-white text-2xl font-bold mb-6 mt-8">Tutto quello che c'è da sapere sulla SEO</h1>
        <div className="category-filter mb-6 flex flex-wrap justify-center">
          <button onClick={() => filterByCategory('')} className="bg-main text-white text-xs py-2 px-4 rounded hover:bg-main-dark m-1">Tutte le guide</button>
          <button onClick={() => filterByCategory('Core Vitals')} className="bg-main-dark text-xs text-white py-2 px-4 rounded hover:bg-main-dark m-1">Come ottimizzare i Core Vitals</button>
          <button onClick={() => filterByCategory('SEO In-Site')} className="bg-main-dark text-xs text-white py-2 px-4 rounded hover:bg-main-dark m-1">Come ottimizzare la SEO In-Site</button>
          <button onClick={() => filterByCategory('SEO Off-Site')} className="bg-main-dark text-xs text-white py-2 px-4 rounded hover:bg-main-dark m-1">Come ottimizzare la SEO Off-Site</button>
        </div>
        <div className="articles-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredArticles.map((article, index) => (
            <div key={index} className="article bg-white p-4 shadow-md rounded">
              {article.coverImage && (
                <img 
                  src={article.coverImage} 
                  alt={`Copertina di ${article.title}`} 
                  className="w-full h-32 object-cover mb-4 rounded"
                />
              )}
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p>{article.content.substring(0, 100)}...</p> {/* Mostra solo i primi 100 caratteri */}
              <Link to={`/blog/${article._id}`} className="text-blue-500 hover:underline">
                Leggi di più
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
