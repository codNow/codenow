
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { UserProvider } from './contexts/UserProvider';

import HomePage from './pages/home';
import Courses from './pages/courses';
import Footer from './pages/footer';
import Header from './pages/header';
import { useEffect, useState } from 'react';
import Blog from './pages/blog';



function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <UserProvider>
        <div>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path='/' element={<HomePage  />} />
              <Route path='/courses' element={<Courses  darkMode={darkMode} />} />
              <Route path='/blog' element={<Blog />} />
            </Routes>
            <Footer darkMode={darkMode} />
        </div>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
