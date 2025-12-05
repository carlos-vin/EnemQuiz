import Container from "../components/Container"
import CardContainer from "../components/CardContainer"
import SubCard from "../components/SubCard"

import { Link} from 'react-router-dom';

import { Star } from 'lucide-react';

import {cardData} from "../data"

export default function Home(){
  return <Container className="w-full h-full items-center bg-[#f6f7f9] ">
					<div className="flex flex-col w-[60%] h-full items-center">

					{/*Parte superior do container central*/}
					
						<div className="flex flex-col items-center pt-10 pb-10">
								
								<h2 className="text-3xl font-bold">O que você quer estudar hoje?</h2>
								<p className="mt-2 font-medium text-gray-500">Selecione uma disciplina específica ou faça uma prova geral</p>
						</div>
					{/*Parte central*/}		
						<div className="w-full h-full flex flex-col">
							<div className="ml-2 text-lg font-semibold">Disciplinas Específicas</div>
							<CardContainer className="">
							{
								cardData.map((e, i)=>{
									return(
									
										<SubCard key={i} linkTo="/test" title={e.title} icon={e.icon}/>
									)
								})
							}
							</CardContainer>
						</div>
						<hr className="border m-2 border-dotted w-full"/>	
					{/*Parte inferior*/}		
						<Link to="/test" className="h-full w-full">
							<h2 className="ml-2 text-lg font-semibold">Treino Completo</h2>
							<div className="mt-4 h-40 rounded-lg bg-linear-to-r text-white from-[#1e60a5] to-[#5c9df7] flex flex-col justify-center  items-center">
								<Star size={40}/>
								<h1 className="text-2xl font-semibold">Iniciar Prova Geral</h1>
								<p className="font-medium">Simulado com questões de todas as áreas</p>
							</div>
						</Link>
					
					
					
					

					</div>
					
					
					
				 
				</Container>
}