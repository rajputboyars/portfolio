import React from 'react';

const OurWorks = () => {
  return (
    <div className="flex bg-black">
      {/* Left Section */}
      <div className="w-1/2 h-screen sticky top-0 flex flex-col justify-center text-white p-8">
        <div className='text-6xl font-bold flex items-center flex-col w-[80%]'>
          <div className='self-start'>OUR</div>
          <div className='pr-20'>Creative</div>
          <div className='self-end'>Journey</div>
        </div>
        {/* <h2 className="text-4xl font-bold">Our <span className="text-orange-400">Creative</span> Journey</h2> */}
        <p className="mt-4">
          The process we follow to help you GROW and SELL on social media that takes just 4hrs/month of your time.
        </p>
        <button className="bg-orange-400 border-4 text-xl mt-8 py-3 px-6 font-bold text-white rounded-lg hover:bg-orange-500 transition-all w-fit">
          Get Started →
        </button>
      </div>

      {/* Right Section (Scrollable Cards) */}
      <div className="w-1/2 overflow-y-auto h-screen p-8 space-y-52 py-20">
        {[1, 2, 3, 4, 5, 6].map((step, index) => (
          <div
            key={index}
            className=" shadow-2xl shadow-white w-[80%] border-gray-200 p-6 rounded-lg bg-gray-900 text-white space-y-4"
          >
            <div className="flex items-center space-x-4 relative">
              <div className="text-9xl font-bold text-gray-400 absolute -top-24">{step}</div>
              <div className='pt-10'>
                <h3 className="text-2xl font-semibold text-orange-400 border-b-2 w-full pb-2 mb-4">Onboarding</h3>
                <p className="mt-2 text-gray-300">
                  We start by getting on an onboarding call to learn about you, your business, niche, target audience, goals, and more.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { OurWorks };
