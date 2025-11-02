import React, { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upi = ({ score, setScore }) => {
  const [val, setVal] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pointsRef = useRef(null);

  // 🧠 Load score from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore) setScore(Number(savedScore));
  }, [setScore]);

  // 💰 Convert points to ₹
  const handlePointsChange = (e) => {
    const enteredPoints = Number(e.target.value);
    if (!isNaN(enteredPoints) && enteredPoints > 0) {
      setVal((enteredPoints * 0.25).toFixed(2));
    } else {
      setVal("");
    }
  };

  // 🎁 Redeem Function
  const handleRedeem = async () => {
    const enteredPoints = Number(pointsRef.current?.value);
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();

    if (!name || !email || !enteredPoints) {
      toast.warning("⚠️ Please fill all fields properly.");
      return;
    }

    if (enteredPoints > score) {
      toast.error("❌ You don’t have enough points!");
      return;
    }

    try {
      // ✅ Send data to Firebase
      await fetch(
        "https://getuserdata-99d17-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            points: enteredPoints,
            money: (enteredPoints * 0.25).toFixed(2),
            date: new Date().toLocaleString(),
          }),
        }
      );

      // ✅ Deduct points & update localStorage
      const newScore = score - enteredPoints;
      setScore(newScore);
      localStorage.setItem("score", newScore.toString());

      toast.success(`✅ Successfully redeemed ₹${(enteredPoints * 0.5).toFixed(2)}!`);

      // Reset inputs
      nameRef.current.value = "";
      emailRef.current.value = "";
      pointsRef.current.value = "";
      setVal("");
    } catch (error) {
      toast.error("⚠️ Failed to redeem. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 text-center">
          Redeem Your Code 🎁
        </h1>

        <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
          Enter your details below:
        </p>

        {/* Inputs */}
        <input
          ref={nameRef}
          type="Upi Name Text"
          placeholder="Name"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          ref={emailRef}
          type="Upi Id"
          placeholder="Enter Your Email"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full mb-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          ref={pointsRef}
          type="number"
          placeholder="Enter your points (1 Point = ₹0.25)"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={handlePointsChange}
        />

        {val && (
          <div className="text-lg sm:text-xl font-semibold text-green-700 mb-4 text-right">
            💰 You will get ₹{val}
          </div>
        )}

        <button
          className="mt-2 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-base sm:text-lg font-medium"
          onClick={handleRedeem}
        >
          Get Now
        </button>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
    </div>
  );
};

export default Upi;
