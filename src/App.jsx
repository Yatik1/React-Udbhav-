import React ,{ useState , useEffect } from 'react'
import './App.css'
import Loader from './Loader';
// Routes
import Routes from "./routes/Routes";

function App() {
 const [loading , setLoading] = useState(false);

 useEffect(() =>{
     setLoading(true)
     setTimeout(() => {
      setLoading(false)
     } , 2500)
 } ,[])


  return (
    <div className="">
      {
        loading ?
          
         <Loader />  : 

         <Routes/>
      }
    </div>
  )
}

export default App
