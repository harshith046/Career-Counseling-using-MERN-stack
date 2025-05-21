import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Home_page from './components/Home_page';
import Ask from './components/Ask';
import Navbar from './components/Navbar'; // Capitalized correctly
import WriteBlog from './components/WriteBlog';
import QuestionState from './context questions/QuestionState';
import BlogState from './context blogs/BlogState';

const App = () => {
  return (
    <BrowserRouter>
      <QuestionState>
        <BlogState>
          <Routes>
            <Route path='/' element={<Home_page />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createuser' element={<Register />} />
            <Route path='/homepage' element={<Home_page />} />
            <Route path='/ask' element={<Ask />} />
            <Route path='/navbar' element={<Navbar />} />
            <Route path='/writeblog' element={<WriteBlog />} />
          </Routes>
        </BlogState>
      </QuestionState>
    </BrowserRouter>
  );
};

export default App;
