import React, { useState } from "react";
import img1 from "../../assets/Images/port1.png";
import img2 from "../../assets/Images/port2.png";
import img3 from "../../assets/Images/port3.png";

function Modal({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {

    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="relative w-[300px] h-[300px] bg-white flex justify-center items-center">
        <img src={image} alt="Selected" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>

      <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />

      <div className="portfolio-section w-full min-h-[70vh] pt-20 space-y-3 pb-6   ">
        <div className="portfolio-header flex flex-col pt-9 justify-center items-center space-y-3">
          <h2 className="text-slate-700 text-4xl font-bold uppercase">
            Portfolio Component
          </h2>
          <i className="star-shape fa-solid fa-star text-slate-700"></i>
        </div>

        <div className="portfolio-content  container px-10  pt-2 gap-8  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[img1, img2, img3, img1, img2, img3].map((img, index) => (
            <div
              key={index}
              className="card  relative cursor-pointer"
              onClick={() => handleCardClick(img)}
            >
              <div className="layer absolute  top-0 left-0 right-0 bottom-0 bg-teal-500 flex justify-center items-center text-6xl text-white opacity-0 hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-plus"></i>
              </div>
              <img src={img} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
