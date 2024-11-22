import homeImage from "../../assets/Images/home.png"
export default function Home() {
  return <>
    
    <div className="home-header w-full h-[70vh] bg-teal-500 pt-9">
      <div className="header-content container w-[80%] flex flex-col items-center justify-center space-y-3 ">
        <img className="w-[250px]" src={homeImage} alt="" />

        <i class="star-shape fa-solid fa-star text-white"></i>


        <h4 className="text-white font-semibold">Graphic Artist - Web Designer - Illustrator</h4>
      </div>

    </div>
    
  </>


}
