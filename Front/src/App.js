import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {Routes,Route,useLocation,useNavigate} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
 

function App() {
   const Location = useLocation();
   const navigate = useNavigate();

   const [characters,setCharacters]= useState([]);
   const [access,setAccess]= useState(false);

   const username = "igniz0590@hotmail.com";
   const password = "12345"

   const login = (userData)=>{
      if(userData.username === username && userData.password === password){
         setAccess(true)
         navigate("/home");
      }
   }
   useEffect(()=>{
      !access && navigate("/")
   },[access])   

   const onSearch = (id) =>{
      const URL_BASE=`http://localhost:3001/rickandmorty`
      /* const KEY = "05c2e55b1919.53c29bd1b6d3b88844c8" */
      if(characters.find((char) => char.id === id)){
         return alert("Personaje repetido")
      }
      
      fetch(`${URL_BASE}/character/${id}?`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name ) {
          setCharacters((oldchars) => [...oldchars, data]);
          
        } else {
          alert("algo salio mal");
        }
      });
           
   }
   const onClose = (id) => {
      setCharacters(
           characters.filter(characters => characters.id !== id)
      )
   }
      return (
      <div className='App'>
         {Location.pathname === "/" ? <Form login={login}/>: <Nav onSearch={onSearch} />}         
         <Routes>   
         <Route path='Home' element={<Cards onClose ={onClose} characters={characters} />} />
         <Route path='about' element={<About/>}/>
         <Route path='detail/:detailId' element={<Detail/>}/>
         <Route path='/favorites' element={<Favorites/>} />
         </Routes>
                  
      </div>
   );
}

export default App;
