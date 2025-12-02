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
			<div className="rounded-md shadow-lg border-solid border-1 w-[95%] h-[90%]">		
				<Container className="bg-red-500 p-3 h-80">
					<div>{props.text}</div>
					{props.alternatives.map((e,i)=>(
						<div>{altLetters[i]}){e}</div>
					))}
				</Container>
			</div>
		)
}
