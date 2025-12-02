type Props={
	children: ReactNode,
	className?: string
}

export default function MainContainer({children, className}:Props){
	return(
		<div className={"h-full flex flex-col items-center justify-center bg-black-500 "+className}>
		{children}
		</div>
	)
}