export default function Contact() {
  return <>
  
  <div className="contact-section">
  <div className="contact-header flex flex-col pt-9 justify-center items-center space-y-3">
          <h2 className="text-slate-700 text-4xl font-bold uppercase">
            contact section
          </h2>
          <i className="star-shape fa-solid fa-star text-slate-700"></i>
        </div>
        <div className="contact-section flex flex-col min-h-[70vh] container pt-14 items-center space-y-12 ">
           <input className="w-1/2 px-3 " type="text" placeholder="userName" />
           <input className="w-1/2 px-3 " type="text" placeholder="userAge" />
           <input className="w-1/2 px-3 " type="text" placeholder="userEmail" />
           <input className="w-1/2 px-3 " type="text" placeholder="userPassword" />

           <button className="bg-teal-500 hover:bg-teal-700 transition-all duration-300 rounded-md shadow-md p-2 text-white self-start ms-80" type="submit">Send Message</button>
        </div>
  </div>

  </>
 
}
