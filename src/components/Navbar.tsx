import { useUser } from '@/contexts/UseUser';
import React from 'react';
import { dropdown1, dropdown2 } from './types';
import { Link } from 'react-router-dom';
import { FiUpload } from 'react-icons/fi';
import { ChevronDown} from 'lucide-react';

const Navbar: React.FC = () => {
    const { user,logout} = useUser();
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);


    const handleMouseEnter = (dropdown: string): void => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = (): void => {
    setActiveDropdown(null);
    };


    return (
        <nav className="bg-slate-950 pb-3 sticky top-0 z-10">
            <div className='hidden md:block'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-950 rounded-md shadow-lg shadow-slate-700 z-[100]">
                    <div className="flex justify-between h-20">
                    <div className='flex items-center space-x-20'>
                    <div className="flex items-center space-x-2 mr-6">
                            <img
                            src="/logo.png"
                            alt="ShenshenApps Logo"
                            className={`h-8 w-8 `}
                            />
                            <span
                            className="text-white text-xl font-bold font-ubuntu"
                            >
                            CodeNow
                            </span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <a
                                href="/"
                                className=" text-gray-300 hover:text-white transition-colors duration-200 font-poppins text-sm"
                            >
                                Home
                            </a>
                                <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("apps")}
                                onMouseLeave={handleMouseLeave}
                                >
                                <a 
                                    href="/courses" 
                                    className="group text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-sm font-poppins"
                                    >
                                    Courses <ChevronDown className="ml-1 transition-transform duration-200 group-hover:mt-1" size={16} />
                                </a>
                                {activeDropdown === "apps" && (
                                    <>
                                    <div
                                        className="absolute left-0 bg-gray-900  mt-4 shadow-lg rounded-md min-w-[300px] z-50 "
                                    >
                                        <div className="absolute w-full h-4 -top-4 bg-transparent" />
                                        <div className="p-2"> {/* Added grid layout */}
                                        {dropdown1.map((dropdown, index) => (
                                            <a
                                            key={index}
                                            href={dropdown.href}
                                            className={`w-full items-center justify-start text-md font-ubuntu `}
                                        > <div className="justify-start p-2 rounded-md items-center text-gray-300 hover:bg-gray-700">
                                        <div className='flex items-center font-quickSand text-sm font-semibold'>
                                        {dropdown.icon}                                      
                                        {dropdown.title}  
                                        </div>
                                        <span className='text-sm font-quickSand text-opacity-5'>{dropdown.description}</span>  
                                        </div>                                        
                                        </a>
                                        ))}
                                        </div>
                                        <div
                                        className="absolute left-5 -translate-x-1/2 bottom-full h-0 w-0 
                                            border-l-[8px] border-r-[8px] border-b-[8px]
                                            border-l-transparent border-r-transparent border-b-gray-900"
                                            
                                        ></div>
                                    </div>
                                    </>
                                )}
                                </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("games")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href="/"
                                    className="group text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-sm font-poppins"
                                >
                                    Resources 
                                    <ChevronDown 
                                        className="ml-1 transition-transform duration-200 group-hover:mt-1" 
                                        size={16} 
                                    />
                                </a>

                                {activeDropdown === "games" && (
                                <>
                                    <div
                                        className="absolute bg-gray-900 left-1/2 -translate-x-1/2 min-w-[500px] mt-4 shadow-lg  rounded-md z-10"
                                        >
                                            <div className="absolute w-full h-4 -top-4 bg-transparent" />
                                            <div className="py-2 grid grid-cols-2 gap-1 px-2">
                                                {dropdown2.map((dropdown, index) => (
                                                    <a
                                                    key={index}
                                                    href={dropdown.href}
                                                    className={`w-full items-center justify-start text-md font-ubuntu `}
                                                > <div className="justify-start p-2 rounded-md items-center text-gray-300 hover:bg-gray-700">
                                                    <div className='flex items-center font-quickSand text-sm font-semibold'>
                                                    {dropdown.icon}                                      
                                                    {dropdown.title}  
                                                    </div>
                                                    <span className='text-sm font-quickSand text-opacity-5 leading-none' >{dropdown.description}  </span>  
                                                    </div>                                        
                                                </a>
                                                ))}
                                                <div
                                                className="absolute left-1/2 -translate-x-1/2 bottom-full h-0 w-0 
                                                    border-l-[8px] border-r-[8px] border-b-[8px]
                                                    border-l-transparent border-r-transparent border-b-gray-900"
                                                    
                                                ></div>
                                            </div>
                                        </div>  
                                </>
                                )}
                            </div>
                            <a
                                href="/allnews"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-poppins text-sm"
                                >
                                Projects
                                </a>
                                <a
                                href="/allnews"
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-poppins text-sm"
                                >
                                Blog
                                </a>
                                
                        </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-1">
                        <button className="inline-flex items-center justify-center rounded-md text-sm 
                            font-medium transition-colors focus:outline-none focus:ring-2 
                            focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-
                            disabled:pointer-events-none
                            focus:ring-offset-slate-900 bg-transparent
                            hover:bg-slate-800 hover:text-slate-100 
                            data-[state=open]:bg-transparent dark:data-[state=open]:
                            px-2 py-2 lg:flex lg:items-center 
                            lg:justify-between lg:border 
                            lg:border-slate-800 lg:h-8 lg:w-60 
                            text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                                stroke-linejoin="round" className="w-5 h-5 lg:w-4 lg:h-4 "><circle cx="11" cy="11" r="8">
                                    </circle><path d="m21 21-4.3-4.3"></path></svg>
                                <span className="hidden lg:inline-flex font-normal text-sm">Search resources</span>
                                <div className="hidden lg:flex items-center gap-1 text-sm font-medium ">
                                    <kbd className="pointer-events-none select-none  rounded border px-1 leading-none text-xl
                                    bg-slate-950 border-slate-950">/</kbd>
                                    <kbd className="pointer-events-none select-none  rounded border px-1.5
                                    bg-slate-950 border-slate-950">K</kbd></div>
                            </button>

                        {user ? (
                            <>
                            <Link
                                to="/profilePage"
                                className="font-poppins font-semibold text-white"
                            >
                                {user ? user.name : "Guest"}
                            </Link>
                            <button
                                type="button"
                                onClick={logout}
                                className= "text-gray-300 border-gray-700 hover:bg-gray-700 px-4 py-1 font-poppins rounded-md border hover:text-gray-900 transition-colors duration-200"
                            >
                                Logout
                            </button>
                            </>
                        ) : (
                            <Link to="/login">
                            <button
                                className= "text-gray-300 border-gray-700 hover:bg-gray-700 px-4 py-1 font-poppins rounded-md border hover:text-gray-100 transition-colors duration-200"
                            >
                                <span>Sign in</span>
                            </button>
                            </Link>
                        )}
                        {user && user.email === "ryansamte07@gmail.com" && (
                            <Link to="/upload">
                            <button>
                                <FiUpload size={26} className="text-red-400" />
                            </button>
                            </Link>
                        )}
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="md:hidden">
            <div
                className="bg-gray-900 flex justify-between items-center p-4"
            >
                <div className="flex items-center space-x-2">
                <img
                    src="/logo2.png"
                    alt="ShenshenApps Logo"
                    className="h-8 w-8"
                />
                <span
                    className= "text-white text-xl font-bold"
                >
                    TechNews
                </span>
                </div>
                <div className="flex items-center space-x-2">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className= "text-gray-300 focus:text-white focus:outline-none"
                >
                    <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    {isMobileMenuOpen ? (
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                    ) : (
                        <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                    )}
                    </svg>
                </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900"
                >
                <div className="flex flex-col px-3 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    
                    
                    {/* Only show navigation items when searchQuery is empty */}
                    <>
                        <a
                        href="/"
                        className= "text-gray-300 hover:text-white font-quickSand font-semibold text-md"
                        >
                        Home
                        </a>

                        <div className="relative">
                        <button
                            onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "apps" ? null : "apps"
                            )
                            }
                            className= "text-gray-300 hover:text-white flex items-center justify-between w-full font-quickSand text-md font-semibold"
                        >
                            Mobiles <ChevronDown className="ml-1" size={16} />
                        </button>
                        {/* Rest of mobiles dropdown */}
                        </div>

                        <div className="relative">
                        <button
                            onClick={() =>
                            setActiveDropdown(
                                activeDropdown === "games" ? null : "games"
                            )
                            }
                            className="text-gray-300 hover:text-white flex items-center justify-between w-full font-semibold text-md font-quickSand"
                        >
                            Computers <ChevronDown className="ml-1" size={16} />
                        </button>
                        {/* Rest of computers dropdown */}
                        </div>

                        <a
                        href="/"
                        className="text-gray-300 hover:text-white font-semibold text-md font-quickSand"
                        >
                        News
                        </a>
                    </>
                </div>
                <div
                    className="pt-4 pb-3 border-t border-gray-700"
                >
                    <div className="flex items-center px-5 justify-center">
                    <div className="flex-shrink-0">
                        {/* Add user avatar here if available */}
                    </div>
                    <div className="items-center justify-center">
                        <div
                        className="text-base font-medium text-white"
                        >
                        {user ? user.name : "Guest"}
                        </div>
                    </div>
                    </div>
                    <div className="mt-5 flex justify-center">
                    {user ? (
                        <button
                        onClick={logout}
                        className="block text-center px-3 py-2 rounded-md text-base font-medium ring-1 ring-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
                            
                        >
                        Sign out
                        </button>
                    ) : (
                        <Link
                        to="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium ring-1 ring-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
                        >
                        Sign in
                        </Link>
                    )}
                    </div>
                </div>
                </div>
            )}
            </div>
        </nav>
    );
};

export default Navbar;