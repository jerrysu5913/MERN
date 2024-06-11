const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Get one blog
router.get('/:id', getBlog, (req, res) => {
    res.json(res.blog);
});
// Create a blog
router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Middleware function to get blog by ID
async function getBlog(req, res, next) {
    let blog;
    try {
        blog = await Blog.findById(req.params.id);
        if (blog == null) {
            return res.status(404).json({ message: 'Cannot find blog' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.blog = blog;
    next();
}
module.exports = router;