const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Contact Me</h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-1 text-xl font-semibold">Email</h3>
              <p className="text-gray-600">designer@example.com</p>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold">Location</h3>
              <p className="text-gray-600">NYC, USA (Remote)</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
