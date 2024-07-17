import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogCarousel = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setArticles(response.data.slice(0, 6)); // Mostra solo i primi 6 articoli
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-carousel bg-main-dark py-8">
      <div className="blog-container mx-auto max-w-4xl text-center">
        <h2 className="text-white text-xl font-bold mb-4">Le guide definitive per dare il Boost al tuo sito web</h2>
        <div className="articles-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
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
        <div className="mt-4 flex justify-center">
          <Link to="/blog" className="blog-link bg-main text-white py-2 px-4 rounded hover:bg-main-dark">
            Leggi tutte le Guide di SeoBoost!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
