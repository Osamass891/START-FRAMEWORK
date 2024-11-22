import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return <>
    <nav>
        <div className="navbar bg-slate-700 p-9 flex justify-between">
            <Link className="text-3xl text-white font-bold ms-2" to="/">START FRAMEWORK</Link>

            <div className="nav-links"></div>
            <ul className="flex text-white font-bold  space-x-4 me-7  pt-2" >
                <li><NavLink className={({isActive})=>{
                    return ` bg-transparent p-3 rounded-lg ${isActive ? "!bg-teal-500" : ""}`
                }} to="/about">ABOUT</NavLink></li>
                <li><NavLink className={({isActive})=>{
                    return ` bg-transparent p-3 rounded-lg ${isActive ? "!bg-teal-500" : ""}`
                }} to="/portfolio">PORTFOLIO</NavLink></li>
                <li><NavLink className={({isActive})=>{
                    return ` bg-transparent p-3 rounded-lg ${isActive ? "!bg-teal-500" : ""}`
                }} to="/contact">CONTACT</NavLink></li>
            </ul>
            
        </div>
    </nav>
    </>
}