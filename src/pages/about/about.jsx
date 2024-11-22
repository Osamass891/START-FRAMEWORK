export default function About() {
  return <>
  <div className="about-section bg-teal-500 w-full h-[70vh] pt-20 space-y-3">
<div className="about-header flex flex-col  pt-9 justify-center items-center space-y-3 ">
    <h2 className="text-white text-4xl font-bold uppercase">about component</h2>
    <i class="star-shape fa-solid fa-star text-white"></i>
</div>
<div className="about-content flex text-white font-semibold justify-center px-6 line-clamp-3">
    <div className="about-left w-[50%]  ">
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.
    </div>
    <div className="about-right w-[50%]  ps-3">
    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, <br /> CSS, and JavaScript as well as optional SASS stylesheets for easy <br /> customization.
    </div>

</div>
  </div>
  
  </>

}
