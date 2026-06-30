import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { Loader } from './components';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login(userData));
      }
      else {
        dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    })
  }, []) 
 

  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    )
  }

  else {
     return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className='min-h-screen flex flex-wrap content-between bg-gray'>
        <div className='w-full block'>
          <Header />
          <main>
             <Outlet />
            </main>
          <Footer />            
        </div>
      </div>
    </div>  
    </>
  )
  }
 
}

export default App;
