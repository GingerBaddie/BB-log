import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';

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
      <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-18.75 h-18.75 transform-3d animate-cube">
          <div className="cube-top"></div>

          <div className="absolute inset-0 transform-3d">
            <span style={{ "--i": 0 }} className="cube-span"></span>
            <span style={{ "--i": 1 }} className="cube-span"></span>
            <span style={{ "--i": 2 }} className="cube-span"></span>
            <span style={{ "--i": 3 }} className="cube-span"></span>
          </div>
        </div>
      </div>
      </>
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
            Todo: {/* { <Outlet />} */}
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
