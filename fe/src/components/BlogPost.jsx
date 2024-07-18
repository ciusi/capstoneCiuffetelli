import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-post-page bg-main min-h-screen py-8"> 
      <Navbar /> 
      <div className="blog-post max-w-4xl mx-auto mt-8 py-8 bg-white p-6 rounded shadow-md px-4"> 
        {post.coverImage && (
          <img 
            src={post.coverImage} 
            alt={`Copertina di ${post.title}`} 
            className="w-full h-64 object-cover mb-4 rounded"
          />
        )}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="content text-left">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
