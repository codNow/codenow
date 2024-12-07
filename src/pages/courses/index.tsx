
import { CommonProps } from '@/components/types';
import { Code, BookOpen, Rocket } from 'lucide-react';

const Courses:React.FC<CommonProps> = ({darkMode}) => {
  return (
    <div className={` min-h-screen ${darkMode ? "bg-slate-950 text-gray-300" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
              Tired of Aimless Tutorials?
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">
              Discover Our Structured Approach to Real-World Coding
            </h2>
            <p className="text-lg text-gray-600">
              Dive into comprehensive, industry-aligned courses that bridge theory and practice.
            </p>
            
            <div className='inline-flex bg-gray-100 ring-1 ring-purple-400 px-1 py-1 mt-10 rounded-md space-x-2'>
                        <input 
                        placeholder='Enter your email'
                        className=' bg-white py-1 px-2 w-44 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400' 
                        />
                    <button className='py-2 px-4 text-gray-200 font-ubuntu rounded-sm bg-gradient-to-r from-purple-400 via-purple-600 to-blue-600 hover:from-pink-700 hover:to-purple-700'>
                        Get Started!
                    </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/programming.png" 
              alt="Coding illustration" 
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 text-center">
          <h2 className={`text-3xl font-bold  mb-12 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Why Choose Our Platform?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${darkMode ? "bg-slate-900" : "bg-blue-50"}`}>
              <Code className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
              <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>
              We don't just teach coding; we teach the technologies that are shaping the future. Our courses are constantly updated to reflect the latest industry trends, ensuring you're always learning the most relevant and in-demand skills
                From web development to AI, master multiple domains and languages.
              </p>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${darkMode ? "bg-slate-900" : "bg-blue-50"}`}>
              <BookOpen className="mx-auto text-green-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Updated Curriculum</h3>
              <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>
                Stay ahead with courses reflecting the latest industry trends.
                Learning to code doesn't mean learning alone. Codenow provides interactive forums, 
                group projects, 
                From web development and mobile apps to data science and cybersecurity, 
                we offer comprehensive courses across multiple domains and programming languages.
              </p>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${darkMode ? "bg-slate-900" : "bg-blue-50"}`}>
              <Rocket className="mx-auto text-purple-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-3">Career Acceleration</h3>
              <p className={`${darkMode ? "text-white" : "text-gray-800"}`}>
                Build practical skills that employers are looking for.
                Each course is meticulously designed with real-world projects that mirror actual industry challenges. 
                You won't just write code—you'll build portfolios that impress employers.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='flex flex-col items-center justify-center p-2 md:p-10 '>
                
                <div className='relative w-full md:max-w-2xl items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
                <defs>
                    <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#4ade80" stop-opacity="0.7"/>
                    <stop offset="100%" stop-color="#10b981" stop-opacity="1"/>
                    </linearGradient>
                </defs>
                
                <path d="M25 40 Q100 10 175 40" fill="none" stroke="url(#bridgeGradient)" stroke-width="6" />
                
                <circle cx="25" cy="40" r="5" fill="#10b981" />
                <circle cx="175" cy="40" r="5" fill="#10b981" />
                </svg>

                <div className='absolute top-32 left-32 flex flex-col items-center'>
                    <span className='text-pink-400 text-4xl font-bold text-center font-poppinsfont-bold'>
                        Bridging the Gap!
                    </span>
                    <span className='text-green-400 text-xl text-center font-poppins'>
                        Between Theory and Real-World Coding!
                    </span>
                </div>
                </div>
          </div>
          <div className='flex flex-col items-center justify-center p-2 md:p-10  relative'>
                <div className='flex items-center'>
                    <span className='text-purple-400 text-3xl text-center font-poppins font-semibold'>
                        Start Your Coding Journey Now <br /> Because the Future is Written in Code!
                    </span>
                </div>

                <div className='w-full md:w-2/3 mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-10 rounded-md
                    shadow-[0_0_15px_rgba(147,197,253,0.6)] 
                    hover:shadow-[0_-10px_20px_rgba(251,207,232,0.7)] 
                    transition-shadow 
                    duration-300 
                    ease-in-out
                    border 
                    border-transparent 
                    hover:animate-[pulse_2s_ease-in-out_infinite]'>
                        <img
                            src='/toy3.png'
                            alt='boy coding'
                            className='w-80 h-96'
                        />
                        <div className='ml-0 md:ml-10 flex flex-col items-center p-6'>
                            <span className='text-pink-400 text-3xl text-left font-poppins'>
                                Comprehensive Technology Coverage
                            </span>
                            <span className={`mt-10  text-xl text-left text-ubuntu ${darkMode ? "text-white" : "text-gray-600"}`}>
                                From web development and mobile apps to data science and cybersecurity, we offer comprehensive courses across multiple domains and programming languages.
                            </span>
                        </div>
                    </div>
                
            </div>

        {/* Call to Action */}
        <div className='flex items-center justify-center'>
          <div className=" max-w-3xl items-center justify-center py-12">
                      <h1 className="text-xl text-center text-purple-500 font-bold mb-4">Recognized by Many in Professional and Social Media</h1>
                      <h1 className="text-3xl text-center text-green-300 font-bold mb-4">Ready to Transform Your Future?</h1>
                      <p className={`text-center text-lg  mb-8 ${darkMode ? "text-white" : "text-gray-700"}`}>
                      Start your coding journey today with structured, industry-relevant learning.
                      </p>
                      <div className="flex justify-between">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Browse Courses</button>
                      <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Join for Free</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Courses;