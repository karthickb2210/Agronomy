import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="relative bg-white p-6 rounded-lg shadow-lg  md:mx-8 lg:mx-16">
            {/* Close Button at Top Right */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#x2715;
            </button>
            
            <img
              src="https://www.shutterstock.com/image-vector/welcome-our-farmhouse-inspirational-quotes-260nw-2196191199.jpg"
              alt="Popup Image"
              className="mb-4 w-full h-auto rounded"
            />
            <Link  to={`/farm`}>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Now
            </button></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
