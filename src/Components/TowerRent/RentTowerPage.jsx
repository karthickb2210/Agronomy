import React from "react";
import { motion } from "framer-motion";
import Footer from "../HomePage/Footer/Footer";
import Navbar from "../HomePage/NavBar/Navbar";
import rent1 from "/rent1.png" 
import rent2 from "/rent2.png" 
const RentTowerPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-white text-black mt-20">
      {/* Header Section */}
      <header className="py-10 text-center bg-green-600 text-white">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rent Your Own Aeroponic Tower
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Grow what you love for a whole year with minimal effort!
        </motion.p>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">What is Aeroponic Farming?</h2>
        <p className="mt-6 text-lg">
          Aeroponic farming is a cutting-edge agricultural technique where plants are grown in a misty environment without soil. Our aeroponic towers allow you to grow fresh, organic produce, herbs, and more in a sustainable, space-efficient way.
        </p>
        <div className="mt-8">
          <img
            src="data:image/jpeg;base64,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"
            alt="Aeroponic Tower"
            className="w-full max-w-md mx-auto rounded shadow"
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center">Why Rent an Aeroponic Tower?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-center">
          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Fresh Produce</h3>
            <p className="mt-4">Grow organic, pesticide-free produce year-round in your own space.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Eco-Friendly</h3>
            <p className="mt-4">Save water, reduce waste, and lower your carbon footprint.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Low Maintenance</h3>
            <p className="mt-4">We take care of the technical setup and maintenance, so you can focus on growing.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Start Growing?</h2>
        <p className="mt-4">Join our growing community of aeroponic farmers today. Click the button below to rent your tower and choose your crops!</p>
        <button className="mt-6 px-8 py-4 bg-white text-green-600 font-bold rounded hover:bg-gray-200 hover:scale-105 transition transform duration-500">
          Rent a Tower Now
        </button>
      </section>

      {/* Customization Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Customize Your Tower</h2>
        <p className="mt-6 text-lg">
          Choose what you want to grow—from leafy greens and herbs. You can even mix and match varieties to suit your dietary needs and preferences.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            src={rent1}
            alt="Customize your plants"
            className="w-full h-auto rounded shadow hover:scale-105 transition transform duration-500"
          />
          <img
            src={rent2}
            alt="Choose your crops"
            className="w-full h-auto rounded shadow hover:scale-105 transition transform duration-500"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-2xl font-semibold">What can I grow in the tower?</h3>
            <p className="mt-4">You can grow a variety of vegetables and herbs including lettuce, thyme , basil, and more!</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-2xl font-semibold">How much does it cost?</h3>
            <p className="mt-4">Our rental plans are affordable and vary based on tower size and crop selection. Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <p>"I’ve been renting an aeroponic tower for 6 months, and I love the fresh, homegrown vegetables. It’s super convenient!"</p>
            <p className="mt-4 font-bold">– Sarah</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p>"The eco-friendly aspect was a huge selling point for me. Plus, the veggies taste amazing!"</p>
            <p className="mt-4 font-bold">– John</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p>"I highly recommend renting a tower. It’s easy to maintain, and the produce is fresh and healthy."</p>
            <p className="mt-4 font-bold">– Emily</p>
          </div>
        </div>
      </section>

      

      {/* Footer Section */}
      
    </div>
    <Footer />
    </>
  );
};

export default RentTowerPage;
