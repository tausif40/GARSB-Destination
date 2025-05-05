import React from "react"
import Image from "next/image"
import HomeNav from "@/components/Navbar/HomeNav"
import Footer from "@/components/Footer/Footer"
import Hero from "@/components/Home/Hero"
import EnquiryForm from "@/components/Form/EnquiryForm"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeNav />
      <div className="mt-20">
        <Hero />
      </div>
      {/* Form and Why UK Section */}
      <section className="bg-[#ebfee8] relative">
        <img src="/home/Polygon-right.png" alt="" className="absolute float-left" />
        <div className="container py-24 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Why Choose UK */}
          <div className="lg:w-1/2 z-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-10">Why Choose UK?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col items-start">
                <div className="bg-[#b5bbdb] rounded-full p-2 mb-4 w-12 h-12 flex items-center justify-center">
                  <Image src="/home/icon1.png" alt="icon" width={25} height={25} />
                </div>
                <h3 className="text-2xl font-semibold text-[#0f2f64] mb-2">Academic Excellence</h3>
                <p className="text-[#536288] w-60">
                  Close to 50% of the best universities in the world are situated in the UK.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-[#f0e7a2] rounded-full mb-4 w-12 h-12 flex items-center justify-center">
                  <Image src="/home/icon2.png" alt="icons" width={40} height={40} />
                </div>
                <h3 className="text-lg font-semibold text-[#0f2f64] mb-2">Vibrant Campuses</h3>
                <p className="text-[#536288] w-60">
                  An important reason to study in UK for Indian students is the vibrant campus life.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-[#a5deab] rounded-full p-2 mb-4 w-12 h-12 flex items-center justify-center">
                  <Image src="/home/icon3.png" alt="icon" width={40} height={40} />
                </div>
                <h3 className="text-lg font-semibold text-[#0f2f64] mb-2">Advanced Technology</h3>
                <p className="text-[#536288] w-60">
                  The country is all about the massive tech boom that is changing the world.
                </p>
              </div>
            </div>
          </div>

          <img src="/home/Polygon-left.png" alt="" className="absolute right-0 -bottom-44" />

          {/* Form */}
          <div className="px-6 w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 z-10 mt-10 md:mt-0">
            <EnquiryForm />
          </div>
        </div>

      </section>

      {/* Success Visa Section */}
      <section className="relative overflow-visible pb-20" >
        {/* Content */}
        <div className="container pb-2 px-4 md:px-8 w-full flex flex-col items-center z-20">
          <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 text-gray-800 pb-4">
            Our Success <span className="text-green-600">Visa</span>
          </h2>

          {/* Triangle Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#ebfee8] -z-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 12%, 0% 100%)' }}
          ></div>

          <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bg-gray-100">
                <Image
                  src={`/home/visa-${i + 1}.png`}
                  alt={`Visa Success ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-40 h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Partner Universities */}
      <section className="container lg:pb-8 xl:pb-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center xl:mt-8 text-gray-700">
          Our Partner <span className="text-red-600">Universities</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-14 mt-4 xl:mt-0">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src={`/home/country-${i + 1}.png`}
                alt={`University Partner ${i + 1}`}
                width={120}
                height={60}
                className="w-28 md:w-36 lg:w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="text-end">
          <span className="text-red-600">Many more...</span>
        </div>
      </section>

      {/* Top Cities Section */}
      <section className="px-4 md:px-8 relative mt-16">
        <div className="container">
          {/* <div className="absolute top-0 left-0 min-w-80 min-h-96 bg-red-300 rounded-full -z-10"></div> */}
          <img src="/home/Ellipse.png" alt="" className="absolute md:-top-20 lg:-top-28 xl:-top-32 left-0 -z-10 hidden md:block" />
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
              Top Cities In the <span className="text-red-600">UK</span>
            </h2>

            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md text-sm">View More</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {["London", "Belfast", "Liverpool", "Birmingham"].map((city, i) => (
              <div key={i} className="relative group overflow-hidden xl:h-[450px]">
                <Image
                  src={`/home/uk-${i + 1}.png`}
                  alt={city}
                  width={300}
                  height={200}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0  p-4 bg-white w-3/4 md:w-2/3 border-l border-b">
                  <h3 className="text-red-500 font-medium text-lg">{city}</h3>
                </div>f
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#05941a] to-[#a29604] text-white py-16 px-4 md:px-8 text-center mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Talk!</h2>
        <p className="mb-6 text-xl">Hurry up we will help you to find out your Dream University!</p>
        <button className="bg-white text-green-600 px-6 py-2 rounded-md font-medium">Get In Touch</button>
      </section>

      <Footer />
    </main>
  )
}
