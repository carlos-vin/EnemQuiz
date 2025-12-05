import Container from "../components/Container"

type Props={
	subject:string,
	text:string,
	number: number,
	alternatives:Array<string>
}

export default function TestContainer(props:Props){
	
		let altLetters =["a","b","c","d","e"]
	
		return(
			<div className="rounded-md shadow-lg border-solid border-1 w-[70%] h-[90%]">		
				<Container className="justify-between p-8 h-full">
					<div className="flex font-bold">Questão: {props.number} - {props.subject}</div>
					<div className="font-medium">{props.text}</div>
					
					<div className="gap-2 grid grid-cols-1 grid-rows-5 md:grid-cols-2 md:grid-rows-3">
						{props.alternatives.map((e,i)=>(
							<div className="hover:border-solid  hover:border-2 hover:cursor-pointer  bg-white shadow h-15 flex items-center font-medium rounded p-2">{altLetters[i]}){e}</div>
						))}
					</div>
				</Container>
			</div>
		)
}
