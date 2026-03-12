import { useState } from "react";

export default function Navbar() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <nav className="fixed top-0 w-full h-20 z-50 bg-white backdrop-blur-md shadow">
      {/* NAVBAR */}
      <div className="fixed top-0 w-full h-20 z-50 bg-white backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 h-full">
          {/* LOGO */}
          <div className="flex items-center lg:-mt-2 lg:-ml-10 shrink-0">
            <img
              src="/logo.svg"
              alt="Sharptrax Technologies"
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* MENU - Hidden on mobile/tablet, shown on desktop */}
          <div className="hidden lg:flex gap-4 xl:gap-6 text-gray-700 items-center whitespace-nowrap">
            <a href="/">Home</a>
            <p className="text-gray-300">/</p>
            <a href="/about-us">About Us</a>
            <p className="text-gray-300">/</p>
            <a href="/services">Services</a>
            <p className="text-gray-300">/</p>
            <a href="#">Projects</a>
            <p className="text-gray-300">/</p>
            <a href="#">Gallery</a>
            <p className="text-gray-300">/</p>
            <a href="/contact">Contact Us</a>
          </div>

          {/* BUTTON */}
          <div className="flex items-center">
            <button
              onClick={() => setOpenForm(true)}
              className="bg-black text-white px-4 md:px-5 py-2 lg:-mr-25 mt-1 whitespace-nowrap text-sm md:text-base shrink-0"
            >
              Enquire Now
            </button>
          </div>
        </div>

        {openForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 mt-100">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Request an Enquiry
              </h2>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpenForm(false);
                }}
              >
                {/* Name */}
                <div>
                  <label className="text-sm text-gray-600">Full Name *</label>
                  <input
                    type="text"
                    required
                    minLength={3}
                    pattern=".*\S.*"
                    title="Please enter at least 3 characters"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-gray-600">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Please enter a valid email"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm text-gray-600">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Requirement */}
                <div>
                  <label className="text-sm text-gray-600">
                    Requirement Details *
                  </label>
                  <textarea
                    required
                    minLength={10}
                    title="Please enter at least 10 characters"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:border-black"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpenForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
