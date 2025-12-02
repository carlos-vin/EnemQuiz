type Props={
	children: ReactNode,
	className?: string
}

export default function Container(props:Props){
	return(
		<div className={"flex flex-col "+props.className} >
		{props.children}
		</div>
	)
}