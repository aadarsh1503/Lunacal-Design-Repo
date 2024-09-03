import React, { useState } from "react";
import { FaPlus, FaQuestionCircle } from "react-icons/fa";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const scroll = (direction) => {
    const container = document.getElementById('gallery-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleAddImageClick = (e) => {
    e.preventDefault();
    document.getElementById('upload-image').click();
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 p-6 lg:p-10 text-white">
      {/* Main container with two sides */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left side with grey background */}
        <div className="lg:w-1/2 lg:h-3/4 mt-7 md:h-3/4 md- hidden lg:flex items-center justify-center bg-gray-700">
          {/* Placeholder or empty space */}
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 p-4 lg:p-6">
          <div className="bg-gray-800 rounded-xl shadow-md p-4 lg:p-6 mb-4 lg:mb-8 relative">
            <div className="absolute top-4 left-4 text-gray-400">
              <FaQuestionCircle size={20} />
            </div>

            {/* Tab buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 pt-8">
  {["About Me", "Experiences", "Recommended"].map((tab) => (
    <button
      key={tab}
      className={`px-4 py-2 rounded-full text-sm md:text-base lg:text-base ${
        activeTab === tab
          ? "bg-gray-700 text-white"
          : "bg-gray-900 text-gray-400"
      } ${
        tab === "Recommended" ? "w-full md:w-auto custom-screen:w-[150px]" : ""
      }`}
      style={
        tab === "Recommended"
          ? { minWidth: '120px' } // Ensures a minimum width for the button
          : {}
      }
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>



            {/* Tab content */}
            <div className="text-gray-300 px-2 h-32 lg:h-40 overflow-y-scroll custom-scrollbar">
              {activeTab === "About Me" && (
                <p className="text-sm lg:text-base font-semibold leading-relaxed">
                  Hello! I'm Aadarsh Chauhan. <br /> <br />
                  Currently, I am working on open-source projects and interning at the Entrepreneurship Network Company. I specialize in MERN stack development, focusing on creating efficient and scalable web applications. <br /> <br />
                  My passion lies in building responsive and visually appealing web applications. I'm always eager to learn and take on new challenges to grow as a developer. Let’s connect and work together to build something amazing!
                </p>
              )}
              {activeTab === "Experiences" && (
                <p className="text-sm lg:text-base leading-relaxed">
                  Experience content here...
                </p>
              )}
              {activeTab === "Recommended" && (
                <p className="text-sm lg:text-base leading-relaxed">
                  Recommended content here...
                </p>
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-md p-4 lg:p-6 relative">
            <div className="absolute top-4 left-4 text-gray-400">
              <FaQuestionCircle size={20} />
            </div>

            <div className="flex justify-between items-center mb-4 pt-8">
              <div className="text-lg text-white font-semibold">Gallery</div>
              <div className="flex items-center space-x-2 lg:space-x-4">
                <button
                  onClick={() => scroll('left')}
                  className="bg-gray-600 text-white p-2 rounded-full"
                >
                  <ArrowLeftIcon className="w-4 h-4 lg:w-6 lg:h-6" />
                </button>
                <a
                  href="#"
                  onClick={handleAddImageClick}
                  className="bg-gray-600 text-white p-2 rounded-full flex items-center space-x-2"
                >
                  <FaPlus className="w-4 h-4 lg:w-6 lg:h-6" />
                  <span className="hidden lg:inline">Add Image</span>
                </a>
                <button
                  onClick={() => scroll('right')}
                  className="bg-gray-600 text-white p-2 rounded-full"
                >
                  <ArrowRightIcon className="w-4 h-4 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>

            <div
              id="gallery-container"
              className="flex overflow-x-auto py-2 space-x-2 lg:space-x-4 scrollbar-hide"
            >
              {images.length === 0 ? (
                <a
                  href="#"
                  onClick={handleAddImageClick}
                  className="flex text-xl lg:text-2xl items-center font-bold font-serif justify-center bg-gray-600 h-32 lg:h-40 rounded-lg w-full cursor-pointer"
                >
                  Add The Images
                </a>
              ) : (
                images.map((image, index) => (
                  <div key={index} className="bg-gray-600 h-32 lg:h-40 rounded-lg flex-shrink-0 w-32 lg:w-40">
                    <img
                      src={image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              id="upload-image"
              onChange={handleImageUpload}
              multiple
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
