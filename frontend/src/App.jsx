import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import PostJob from './components/admin/PostJob';
import Profile from './components/Profile'
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },

        <Route path='/admin/post-job' element={<PostJob />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
