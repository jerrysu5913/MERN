import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/blogs', { title, content })
            .then(response => {
                console.log('Blog added:', response.data);
                history.push('/');
            })
            .catch(error => console.error('Error adding blog:', error));
    };
    return (
        <div>
            <h1>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) =>
                        setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content</label>
                    <textarea value={content} onChange={(e) =>
                        setContent(e.target.value)}></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddBlog;