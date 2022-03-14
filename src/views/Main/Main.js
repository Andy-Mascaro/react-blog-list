import { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import { fetchBlogs } from '../../services/Blogs'; 


export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => { 
    const fetch = async () => {
      const resp = await fetchBlogs();
      setBlogs(resp);
    };
    fetch();
  }, []);
  return (
   
    <div className="main">main
      {blogs.map((item) => (
        <BlogCard key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          text={item.text}
          image={item.image} />
      ))}
    </div>
  );
}
