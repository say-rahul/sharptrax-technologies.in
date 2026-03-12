import { type FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted:", data);

    alert("Enquiry sent successfully!");
    e.currentTarget.reset();
  };

  return (
    <div className="w-full min-h-screen bg-white hero-font">
      <div className="h-20"></div>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Request an Enquiry
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-10 rounded-3xl border border-gray-200"
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name *
            </label>
            <input
              name="fullName"
              type="text"
              required
              minLength={3}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Phone Number *
            </label>
            <input
              name="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            />
          </div>

          {/* Requirement */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Requirement Details *
            </label>
            <textarea
              name="details"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black"
            ></textarea>
          </div>

          {/* Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
