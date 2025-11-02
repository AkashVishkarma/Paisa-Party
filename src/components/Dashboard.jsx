import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-[90vh] w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4 sm:px-6 bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      
      {/* Left Section */}
      <div className="h-auto lg:h-[65vh] w-full lg:w-[25%] bg-white/80 border border-indigo-200 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-md flex flex-wrap justify-center items-center gap-6 p-4 sm:p-6 transition-transform duration-300 hover:scale-[1.02]">
        
        <Link
          to="/redeemCode"
          className="h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border border-indigo-300"
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/017/396/800/small/google-play-store-mobile-apps-logo-free-png.png"
            alt="App 1"
            className="w-full h-full object-cover rounded-2xl"
          />
        </Link>

        <Link className="h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border border-indigo-300"
          to="/upi"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj1QNHzC6AVkGEEf1UoX2yVRkhM3w9nsA5w&s"
            alt="App 2"
            className="w-full h-full object-cover rounded-2xl"
          />
        </Link>

        <div className="h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border border-indigo-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPC3UNIfxgrAHMh6VLpvokIYGUjmHIVBSTjA&s"
            alt="App 3"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="h-[100px] sm:h-[120px] w-[100px] sm:w-[120px] bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 border border-indigo-300">
          <img
            src="https://thumbs.dreamstime.com/b/vector-illustration-cool-modern-coming-soon-banner-icon-flat-web-label-element-vector-illustration-modern-coming-soon-banner-icon-169501158.jpg"
            alt="App 4"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="h-auto lg:h-[65vh] w-full lg:w-[60%] bg-white/80 border border-indigo-200 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3">
          Transactions 💳 || This is not Work Some Issue But We Will fix It
        </h2>
        <div>
          {/* Add your transaction elements here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
