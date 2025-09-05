import React from "react";

const Newsletter = () => {
  return (
   <div
  className="relative bg-cover bg-center flex flex-col md:flex-row items-center justify-between 
  p-6 md:p-12 rounded-2xl bg-gray-300 m-6 min-h-[500px] md:min-h-[550px]"
  style={{ backgroundImage: "url('src/assets/fading-blue-background.jpg')" }}
>

      {/* Left Side */}
      <div className="md:w-1/2 space-y-4 text-white">
        <p className="text-lg">Sign up for the newsletter</p>
        <h2 className="text-2xl md:text-5xl font-bold leading-snug">
          Receive a
          <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded-md inline-block">
            10%
          </span>
          discount <br />
          on your purchases
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" defaultChecked />
            <span>Varius eget ultricies</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" defaultChecked />
            <span>Suspendisse nunc</span>
          </label>
        </div>
      </div>

      {/* Right Side (Form Card) */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full md:w-1/2 max-w-md mt-6 md:mt-0 md:ml-10">
        <h3 className="text-xl font-bold text-[#0B1A48] mb-4">
          Join our newsletter
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
