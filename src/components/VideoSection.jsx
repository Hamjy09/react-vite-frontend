import React from "react";

const VideoSection = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          Watch Our Story
        </h2>

        {/* Responsive Video */}
        <div className="relative w-full pb-[50%] overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
