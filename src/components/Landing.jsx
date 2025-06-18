import React from "react";

function Landing() {
  return (
    <div className="relative w-full h-[200vh]">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className="absolute top-0 text max-w-screen-2xl mx-auto px-5 sm:px-10 text-white">
        <div className="para mt-96">
          <p>Global digital design studio partnering</p>
          <p>with brands and businesses that create</p>
          <p>exceptional experiences where people</p>
          <p>live,work and unwind.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
