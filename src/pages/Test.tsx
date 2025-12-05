import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import Container from "../components/Container"
import CardContainer from "../components/CardContainer"
import TestContainer from "../components/TestContainer"
import SubCard from "../components/SubCard"

import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';

import { Star } from 'lucide-react';

import {cardData} from "../data"
import {testData} from "../data"

export default function Test(){
  return (
		
				<Container className="w-full h-[calc(100vh-52px)] items-center justify-center bg-[#f6f7f9]">
				  <TestContainer subject={testData[0].subject} number={testData[0].number} text={testData[0].text} alternatives={testData[0].alternatives}/>
				  
				  
				  
					
					
					{/*testData.map((e)=>{
						return(
						<div>{e.subject}</div>
						)
						
					})*/}

							
				</Container>
		
		
  )
}