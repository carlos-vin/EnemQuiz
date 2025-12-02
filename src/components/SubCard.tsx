import { DynamicIcon } from 'lucide-react/dynamic';
import {Link} from "react-router-dom"

type Props={
	title: string,
	icon?: string,
	className?: string,
	linkTo?: string
}

export default function SubCard(props:Props){
	return(
		<Link to={props.linkTo} className={"hover:text-white hover:bg-linear-to-r hover:from-[#1e60a5] hover:to-[#5c9df7] h-25 w-[23%] m-2 bg-white shadow pl-5 rounded-md flex flex-col justify-center items-start "+props.className} >
			<div className="mb-2">
				<DynamicIcon name={props.icon} size={32} />
			</div>
			<p className="font-medium">{props.title}</p>
		</Link>
	)
}