import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog._id}>
                        <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BlogList;