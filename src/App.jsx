import './App.css'
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      {/*Navbar*/}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-full px-6 py-3 border border-gray-200">
          <div className="flex justify-between items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img src="/assets/Logo.svg" alt="Netlab Logo" className="h-6 w-6" />
              <h1 className="text-lg font-bold text-black">Netlab</h1>
            </div>
            <ul className="flex space-x-6 items-center">
              <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</a></li>
              <li><a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Courses</a></li>
              <li><a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-white pt-16 pb-20 bg-[url(/assets/grid.jpg)] bg-cover bg-center">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <TypeAnimation
            sequence={[
              'LEARN COMPUTER NETWORKS 🛜',
              1000,
              'LEARN DATABASE SYSTEMS 📂',
              1000,
              'LEARN OPERATING SYSTEMS 🪟',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4em', display: 'inline-block', fontWeight: 'bold' }}
            repeat={Infinity}
          />
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-white relative inline-block my-8">
            <span className="relative z-10 px-4 py-2">
              Our Courses
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-md opacity-30 -z-10"></span>
            </span>
          </h2>          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desain & Manajemen Jaringan Komputer",
                desc: "Learn how to design a large scale network.",
                logo: "/assets/DMJLogo.svg",
                bg: "bg-gradient-to-br from-purple-600 to-blue-500"
              },
              {
                title: "Sistem Basis Data",
                desc: "Learn the fundamentals of relational and non-relational databases.",
                logo: "/assets/SBDLogo.svg",
                bg: "bg-gradient-to-br from-emerald-500 to-teal-600"
              },
              {
                title: "Sistem Operasi",
                desc: "Learn topics such as process, memory, file systems, and more.",
                logo: "/assets/OSLogo.svg",
                bg: "bg-gradient-to-br from-amber-500 to-orange-600"
              },
            ].map((course, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl border border-gray-800">
                <div className={`${course.bg} h-48 flex items-center justify-center`}>
                  <img src={course.logo} alt={course.title} className="w-32 h-32 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{course.title}</h3>
                  <p className="mt-3 text-gray-400">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 -z-10"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center text-white-800 relative inline-block my-8">
            <span className="relative z-10 px-4 py-2">
              Frequently Asked Questions
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-30 -z-10"></span>
            </span>
          </h2>          
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                question: "Tralalelo Tralala or Bombardino Crocodillo?",
                answer: "Bombardino Crocodillo"
              },
              {
                question: "Bombardino Crocodillo or Tung Tung Tung Tung Tung Sahur?",
                answer: "Tung Tung Tung Tung Tung Sahur"
              },
              {
                question: "Tung Tung Tung Tung Tung Sahur or Brr Brr Patapim?",
                answer: "Tung Tung Tung Tung Tung Sahur"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-white"
              >
                <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
                <p className="text-gray-600 mt-2">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;