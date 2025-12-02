import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {Button} from "@/components/ui/button"
import {User, BookOpen} from "lucide-react"
export default function Header(){
	let style="pl-4 pr-4 shadow relative z-10 w-full h-13 flex items-center justify-between bg-white"
	return(
		<div className={style}>
			<Link to="/" className="font-bold flex">
			<BookOpen className="mr-2"size={30}/>
			<p className="text-lg">ENEM Quiz</p>
			
			</Link>
			<div>
				<User/>
			</div>
		</div>
	)
}

