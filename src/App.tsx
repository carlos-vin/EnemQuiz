import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home"
import Test from "./pages/Test"

import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import Container from "./components/Container"
import CardContainer from "./components/CardContainer"
import SubCard from "./components/SubCard"

import { Star } from 'lucide-react';

import {cardData} from "./data"




const App=()=>{

  return (
	
	<BrowserRouter>
			<MainContainer className="h-full">
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/test" element={<Test/>}/>
				
			</Routes>
			</MainContainer>
			
			
	
	</BrowserRouter>
    
  );
}

export default App;
