import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
            .then(response => setBlog(response.data))
            .catch(error => console.error('Error fetching blog:', error));
    }, [id]);
    return (
        <div>
            {blog ? (
                <>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default BlogDetail;