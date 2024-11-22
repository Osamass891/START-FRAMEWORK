import { Link } from "react-router-dom"
import notFound from "../../assets/Images/notFound.png"

export default function NotFound() {
  return <>
  <div className="container flex flex-col justify-center items-center space-y-3 pb-6">
<img className="w-1/3" src={notFound} alt="" />
<h2 className="text-2xl ">Page Not Found</h2>
<Link className="font-bold text-blue-800" to="home">Return To Home Page</Link>
  </div>
  </>
  
}
