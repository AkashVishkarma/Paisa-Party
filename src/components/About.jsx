import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">About Us</h1>

      <p className="max-w-2xl text-center text-gray-700 mb-6">
        Welcome to <span className="text-indigo-500 font-semibold">Paisa Party</span> — 
        your one-stop platform for fun, finance, and rewards! Our goal is to create 
        exciting games and opportunities where users can play, earn, and enjoy.
      </p>

      <p className="text-gray-600 text-sm">
        📧 Contact us at: <a href="mailto:paisaparty8@gmail.com" className="text-indigo-600 underline">paisaparty8@gmail.com</a>
      </p>
    </div>
  );
};

export default About;
