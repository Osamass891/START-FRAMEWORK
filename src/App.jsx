import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/pages/home/home"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Portfolio from "./pages/portfolio/portfolio"
import Layout from "./components/layout/layout"
import NotFound from "./pages/notFound/notFound"
export default function App(){
  return <>
 

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route path="/" element={<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="portfolio" element={<Portfolio/>}/>
  <Route path="contact" element={<Contact/>}/>
  <Route path="*" element={<NotFound/>}/>

  </Route>
  
</Routes>

</BrowserRouter>
  

  
  
  </>
}