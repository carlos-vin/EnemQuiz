import Container from "../components/Container"
import { Button } from "./ui/button"
import { useState } from "react"

type Props={
	subject:string,
	text:string,
	number: number,
	alternatives:Array<string>,
	correct?:number
}

export default function TestContainer(props:Props){
	
		let altLetters =["a","b","c","d","e"]

		const [selectedAlt, setSelectedAlt] = useState<number | null>(null);

		function verifyAns(){
			if(selectedAlt === props.correct){
				alert("Resposta correta!")
			}else{
				alert("Resposta incorreta!")
			}
		}
	
		return(
			<div className="rounded-md shadow-lg border-solid border w-[70%] h-[90%]">		
				<Container className="justify-between p-8 h-full">
					<div className="flex font-bold">Questão: {props.number} - {props.subject}</div>
					<div className="font-medium">{props.text}</div>
					
					<div  className="gap-2 grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3">
						{props.alternatives.map((e,i)=>(
							<div onClick={() => setSelectedAlt(i)} key={i} className="hover:border-solid  hover:border-2 hover:cursor-pointer  bg-white shadow h-15 flex items-center font-medium rounded p-2">{altLetters[i]}){e}</div>
						))}
					</div>
					<div className="flex justify-between">
						<Button onClick={()=>verifyAns()} className=" focus:bg-amber-200 h-15 min-w-25 border hover:cursor-pointer bg-linear-to-r text-white from-[#b91c1c] to-[#ef4444]">Sair</Button>
						<Button className="h-15 min-w-25 border hover:cursor-pointer  bg-linear-to-r text-white from-[#1e60a5] to-[#5c9df7]">Responder</Button>
					</div>
					
				</Container>
			</div>
		)
}
