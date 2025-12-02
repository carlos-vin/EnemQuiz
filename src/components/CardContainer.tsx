
type Props={
	children: ReactNode,
	className?: string
}

export default function CardContainer({children, className}:Props){
	return(
		<div className={"w-full flex-wrap justify-start  pt-5 flex flex-row "+className}>
		{children}
		</div>
	)
}