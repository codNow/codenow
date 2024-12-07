
import * as React from 'react';
import { useNavigate } from 'react-router-dom';



const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={"bg-slate-950 min-h-screen "}>
            <div className="relative flex flex-col md:flex-row bg-slate-950 min-h-[900px] overflow-hidden -z-0
            ">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    w-[300px] h-[100px] 
                    shadow-[0_0_15px_rgba(147,197,253,0.6)] 
                    hover:shadow-[0_-10px_20px_rgba(251,207,232,0.7)] 
                    transition-shadow 
                    border 
                    border-transparent     
                    rounded-[50%] 
                    
                    opacity-70 
                    animate-[spin_10s_linear_infinite]">
                </div>
                <div className="w-full md:w-1/2 ml-0 md:ml-10 p-1 sm:p-10 text-center md:text-left mt-0 md:mt-28 ">
                    <h2 className="text-3xl md:text-4xl font-ubuntu font-bold mb-4 text-gray-300">
                        Tired of Aimless Tutorials?
                    </h2>
                    <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-4 text-green-400">
                        Discover Our Structured Approach to Real-World Coding
                    </h2>
                    <p className="text-xl text-gray-300">
                        Structured Courses for Practical Skills and Success
                    </p>
                    <div className='inline-flex bg-white px-1 py-1 mt-10 rounded-md space-x-2'>
                        <input 
                        placeholder='Enter your email'
                        className=' bg-white py-1 px-2 w-44 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400' 
                        />
                    <button onClick={() => navigate("/blog")} className='py-2 px-4 text-gray-200 font-ubuntu rounded-sm bg-gradient-to-r from-purple-400 via-purple-600 to-blue-600 hover:from-pink-700 hover:to-purple-700'>
                        Sign up for free!
                    </button>
                    </div>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-center p-4 mt-0 md:mt-10">
                    <img 
                        src='/programming.png'
                        alt='first image'
                        className='w-[500px] h-[500px] object-cover'
                    />
                    
                </div>
            </div>
            <div className='flex flex-col items-center justify-center p-2 md:p-10 mt-0 md:mt-[-400px] relative'>
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
                            <span className='mt-10 text-green-200 text-xl text-left text-ubuntu'>
                                From web development and mobile apps to data science and cybersecurity, we offer comprehensive courses across multiple domains and programming languages.
                            </span>
                        </div>
                    </div>
                
            </div>

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

                <div className='absolute top-32 left-10 flex flex-col items-center'>
                    <span className='text-purple-400 text-4xl font-bold text-center font-poppinsfont-bold'>
                        Bridging the Gap!
                    </span>
                    <span className='text-green-400 text-3xl text-center font-poppins'>
                        Between Theory and Real-World Coding!
                    </span>
                </div>
                </div>
                

                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-10 rounded-md 
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex items-center justify-start p-6 border-b-2 border-gray-700'>
                                <img
                                    src='/feature (1).png'
                                    alt='boy coding'
                                    className='w-80 h-80'
                                />
                            </div>
                        <div className='ml-0 md:ml-10 flex flex-col items-center p-6'>
                            <span className='text-pink-400 text-3xl text-center font-poppinsfont-bold'>
                                Cutting-Edge Curriculum
                            </span>
                            <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                We don't just teach coding; we teach the technologies that are shaping the future. Our courses are constantly updated to reflect the latest industry trends, ensuring you're always learning the most relevant and in-demand skills
                            </span>
                        </div>
                        </div>
                        
                </div>
                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-md
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex flex-col items-center p-6'>
                                <span className='text-pink-400 text-3xl text-center font-poppins font-bold'>
                                    Community and Collaboration
                                </span>
                                <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                Learning to code doesn't mean learning alone. Codenow provides interactive forums, 
                                group projects, 
                                From web development and mobile apps to data science and cybersecurity, 
                                we offer comprehensive courses across multiple domains and programming languages.
                                </span>
                            </div>
                            <div className='flex items-center justify-end p-6  border-b-2 border-gray-700 '>
                                <img
                                    src='/feature (2).png'
                                    alt='boy coding'
                                    className='w-80 h-96'
                                />
                            </div>
                        
                        </div>
                        
                        
                </div>
                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-md 
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex items-center justify-start p-6 border-b-2 border-gray-700'>
                                <img
                                    src='/feature (3).png'
                                    alt='boy coding'
                                    className='w-96 h-96'
                                />
                            </div>
                        <div className='flex flex-col items-center p-6'>
                            <span className='text-pink-400 text-3xl text-center font-poppins font-bold'>
                                Hands-On, Project-Driven Learning
                            </span>
                            <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                Forget passive video tutorials. Codenow believes in learning by doing. 
                                Each course is meticulously designed with real-world projects that mirror actual industry challenges. 
                                You won't just write code—you'll build portfolios that impress employers.
                            </span>
                        </div>
                        </div>
                        
                </div>
                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-md 
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex flex-col items-center p-6'>
                                <span className='text-pink-400 text-3xl text-center font-poppins font-bold'>
                                    Our Commitment to Modern Tech Education
                                </span>
                                <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                    In an age where technology evolves at lightning speed, traditional education often falls behind. 
                                    Codenow is different. We're committed to:
                                    Covering emerging technologies like AI, machine learning, blockchain, and cloud computing
                                </span>
                            </div>
                            <div className='flex items-center justify-end p-6 border-b-2 border-gray-700'>
                                <img
                                    src='/feature (4).png'
                                    alt='boy coding'
                                    className='w-96 h-96'
                                />
                            </div>
                        
                        </div>
                        
                </div>
                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-md 
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex items-center justify-start p-6 border-b-2 border-gray-700'>
                                <img
                                    src='/feature (5).png'
                                    alt='boy coding'
                                    className='w-96 h-96'
                                />
                            </div>
                        <div className='flex flex-col items-center p-6'>
                            <span className='text-pink-400 text-3xl text-center font-poppins font-bold'>
                                Practical Over Theoretical
                            </span>
                            <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                We prioritize practical skills. Our tutorials focus on building actual applications, 
                                understanding best practices, and developing a problem-solving mindset.
                                From web development and mobile apps to data science and cybersecurity
                            </span>
                        </div>
                        </div>
                        
                </div>
                <div className='w-full md:max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center px-6 py-4 rounded-md 
                    '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='ml-0 md:ml-10 flex flex-col items-center p-6'>
                                <span className='text-pink-400 text-3xl text-center font-poppins font-bold'>
                                    Get Started Today
                                </span>
                                <span className='mt-10 text-green-200 text-xl text-center text-ubuntu'>
                                Whether you dream of becoming a professional developer, want to enhance your current skills, 
                                or are simply curious about coding, Codenow is your launchpad. 
                                Join us and transform your passion into expertise.
                                </span>
                            </div>
                            <div className='flex items-center justify-end p-6 border-b-2 border-gray-700'>
                                <img
                                    src='/feature (6).png'
                                    alt='boy coding'
                                    className='w-96 h-96'
                                />
                            </div>
                        
                        </div>
                        
                </div>
                <div className="max-w-3xl items-center justify-center py-12 shadow-lg">
                    <h1 className="text-xl text-center text-purple-500 font-bold mb-4">Recognized by Many in Professional and Social Media</h1>
                    <h1 className="text-3xl text-center text-green-300 font-bold mb-4">Trusted by Employees at Leading Companies</h1>
                    <p className="text-center text-lg text-gray-100 mb-8">My courses are used by professionals from top companies like Microsoft, Amazon, and Google, helping them sharpen their skills and stay ahead in their fields.</p>
                    <div className="flex justify-between">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Browse Courses</button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full">Join for Free</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default HomePage;

