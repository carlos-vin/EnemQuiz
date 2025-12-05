import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home"
import Test from "./pages/Test"

import Header from "./components/Header"
import MainContainer from "./components/MainContainer"





const App=()=>{

  return (
	
	<BrowserRouter>
			<MainContainer className="h-screen">
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
