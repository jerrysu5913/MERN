import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NewBlog from './pages/NewBlog';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/new" component={NewBlog} />
      </Routes>
    </Router>
  );
}
export default App;