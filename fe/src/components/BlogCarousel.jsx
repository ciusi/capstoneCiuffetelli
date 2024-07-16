import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { title: "Articolo 1", content: "Contenuto dell'articolo 1" },
  { title: "Articolo 2", content: "Contenuto dell'articolo 2" },
  { title: "Articolo 3", content: "Contenuto dell'articolo 3" },
  { title: "Articolo 4", content: "Contenuto dell'articolo 4" },
  { title: "Articolo 5", content: "Contenuto dell'articolo 5" },
  { title: "Articolo 6", content: "Contenuto dell'articolo 6" },
  { title: "Articolo 7", content: "Contenuto dell'articolo 7" },
  { title: "Articolo 8", content: "Contenuto dell'articolo 8" },
  { title: "Articolo 9", content: "Contenuto dell'articolo 9" },
];

const BlogCarousel = () => {
  const articlesToShow = articles.slice(0, 6);

  return (
    <div className="bg-main-dark py-8">
      <div className="blog-container text-center">
          <h2 className="text-white text-xl font-bold mb-4">Le guide definitive per dare il Boost al tuo sito web</h2>
          <div className="articles-list grid grid-cols-1 md:grid-cols-3 gap-4">
            {articlesToShow.map((article, index) => (
              <div key={index} className="article bg-white p-4 shadow-md">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p>{article.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/blog" className="blog-link bg-main text-white py-2 px-4 rounded hover:bg-main-dark">
              Vai al Blog
            </Link>
            </div>
          </div>
        </div>
     
   
  );
};

export default BlogCarousel;
