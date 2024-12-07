import * as React from 'react';
import { ChevronDown, Sun, Moon } from "lucide-react";
import { Link} from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { useUser } from '@/contexts/UseUser';
import { dropdown1, dropdown2, HeaderProps } from '@/components/types';




const Header: React.FC<HeaderProps> = ({ 
    toggleDarkMode, 
    darkMode 
    }) => {

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
        <nav
        className={`${
            darkMode ? "bg-gray-950" : "bg-white"
            } shadow-sm sticky top-0 z-50 backdrop-blur-lg transition-all`}
    >
        {/* Desktop Navbar */}
        <div className="hidden md:block">
        <div className="container mx-auto flex justify-between items-center p-2">
            <div className='flex items-center space-x-20'>
        <div className="flex items-center space-x-2 mr-6">
                <img
                src="/logo.png"
                alt="ShenshenApps Logo"
                className={`h-8 w-8 `}
                />
                <span
                className={`${
                    darkMode ? "text-white" : "text-gray-800"
                } text-xl font-bold font-ubuntu`}
                >
                CodeNow
                </span>
            </div>
            <div className="flex items-center space-x-6">
                <a
                    href="/"
                    className={`${
                    darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } transition-colors duration-200 font-poppins text-sm`}
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
                        className={`group ${
                        darkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors duration-200 flex items-center text-sm font-poppins`}
                    >
                        Courses <ChevronDown className="ml-1 transition-transform duration-200 group-hover:mt-1" size={16} />
                    </a>
                    {activeDropdown === "apps" && (
                        <>
                        <div
                            className={`absolute left-0  mt-4 ${
                            darkMode ? "bg-gray-900" : "bg-gray-50"
                            } shadow-md rounded-md min-w-[300px]`} 
                        >
                            <div className="absolute w-full h-4 -top-4 bg-transparent" />
                            <div className="p-2"> {/* Added grid layout */}
                            {dropdown1.map((dropdown, index) => (
                                <a
                                key={index}
                                href={dropdown.href}
                                className={`w-full items-center justify-start text-md font-ubuntu `}
                            > <div className={`justify-start p-2 rounded-md items-center ${darkMode ? "text-gray-300 hover:bg-gray-700": "text-gray-700 hover:bg-gray-100"}`}>
                            <div className='flex items-center font-ubuntu text-sm font-semibold'>
                            {dropdown.icon}                                      
                            {dropdown.title}  
                            </div>
                            <span className='text-sm font-poppins text-opacity-5'>{dropdown.description}</span>  
                            </div>                                        
                            </a>
                            ))}
                            </div>
                            <div
                            className={`absolute left-5 -translate-x-1/2 bottom-full h-0 w-0 
                                border-l-[8px] border-r-[8px] border-b-[8px]
                                border-l-transparent border-r-transparent
                                ${darkMode ? "border-b-gray-900" : "border-b-gray-50 "}`}
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
                        className={`group ${
                            darkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors duration-200 flex items-center text-sm font-poppins`}
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
                            className={`absolute left-1/2 -translate-x-1/2 min-w-[500px] mt-4 ${
                                darkMode ? "bg-gray-900" : "bg-gray-50"
                            } shadow-md rounded-md `}
                            >
                                <div className="absolute w-full h-4 -top-4 bg-transparent" />
                                <div className="py-2 grid grid-cols-2 gap-1 px-2">
                                    {dropdown2.map((dropdown, index) => (
                                        <a
                                        key={index}
                                        href={dropdown.href}
                                        className={`w-full items-center justify-start text-md font-ubuntu `}
                                    > <div className={`justify-start p-2 rounded-md items-center ${darkMode ? "text-gray-300 hover:bg-gray-700": "text-gray-700 hover:bg-gray-100"}`}>
                                        <div className='flex items-center font-ubuntu text-sm font-semibold'>
                                        {dropdown.icon}                                      
                                        {dropdown.title}  
                                        </div>
                                        <span className='text-sm font-poppins text-opacity-5 leading-none' >{dropdown.description}  </span>  
                                        </div>                                        
                                    </a>
                                    ))}
                                    <div
                                    className={`absolute left-1/2 -translate-x-1/2 bottom-full h-0 w-0 
                                        border-l-[8px] border-r-[8px] border-b-[8px]
                                        border-l-transparent border-r-transparent
                                        ${darkMode ? "border-b-gray-900" : "border-b-gray-50 "}`}
                                    ></div>
                                </div>
                            </div>  
                    </>
                    )}
                </div>
                <a
                    href="/allnews"
                    className={`${
                        darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } transition-colors duration-200 font-poppins text-sm`}
                    >
                    Projects
                    </a>
                    <Link
                    to="/blog"
                    className={`${
                        darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } font-poppins transition-colors duration-200 text-sm`}
                    >
                    Blog
                    </Link>
                    
            </div>
            </div>
            <div className="flex items-center space-x-4 mt-1">
            <button className={`inline-flex h-8 w-60 px-2 py-2 items-center justify-between rounded-md text-sm 
                font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 border  
                ${darkMode ? "text-slate-400 lg:border-slate-800 hover:bg-slate-800 hover:text-slate-100 focus:ring-offset-slate-900 bg-transparent  focus:ring-slate-400 " 
                : "focus:ring-slate-400 border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                    stroke-linejoin="round" className="w-5 h-5 lg:w-4 lg:h-4 "><circle cx="11" cy="11" r="8">
                        </circle><path d="m21 21-4.3-4.3"></path></svg>
                    <span className="hidden lg:inline-flex font-normal text-sm">Search resources</span>
                    <div className="hidden lg:flex items-center gap-1 text-sm font-medium ">
                        <kbd className={`pointer-events-none select-none  rounded border px-1 leading-none text-xl
                        ${darkMode ? "bg-slate-950 border-slate-950" : "bg-slate-50"}`}>/</kbd>
                        <kbd className={`pointer-events-none select-none  rounded border px-1.5
                        ${darkMode ? "bg-slate-950 border-slate-950" : "bg-slate-50 "}`}>K</kbd></div>
                </button>

            {user ? (
                <>
                <Link
                    to="/profilePage"
                    className={`font-poppins font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    {user ? user.name : "Guest"}
                </Link>
                <button
                    type="button"
                    onClick={logout}
                    className={`${
                    darkMode
                        ? "text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "text-gray-600 border-gray-300 hover:bg-gray-100"
                    } px-4 py-1 font-poppins rounded-md border hover:text-gray-900 transition-colors duration-200`}
                >
                    Logout
                </button>
                </>
            ) : (
                <Link to="/blog">
                <button
                    className={`${
                    darkMode
                        ? "text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "text-gray-600 border-gray-300 hover:bg-gray-100"
                    } px-4 py-1 font-poppins rounded-md border hover:text-gray-900 transition-colors duration-200`}
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
            <button
                onClick={toggleDarkMode}
                className={`fixed right-4 p-1.5 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
            >
                {darkMode ? (
                <Sun className="text-yellow-400" />
                ) : (
                <Moon className="text-gray-700" />
                )}
            </button>
            </div>
        </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
        <div
            className={`flex justify-between items-center p-4 ${
            darkMode ? "bg-gray-900" : "bg-white"
            }`}
        >
            <div className="flex items-center space-x-2">
            <img
                src="/logo2.png"
                alt="ShenshenApps Logo"
                className={`h-8 w-8 ${darkMode ? "filter invert" : ""}`}
            />
            <span
                className={`${
                darkMode ? "text-white" : "text-gray-800"
                } text-xl font-bold`}
            >
                TechNews
            </span>
            </div>
            <div className="flex items-center space-x-2">
            <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
            >
                {darkMode ? (
                <Sun className="text-yellow-400" size={16} />
                ) : (
                <Moon className="text-gray-700" size={16} />
                )}
            </button>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${
                darkMode
                    ? "text-gray-300 focus:text-white"
                    : "text-gray-600 focus:text-gray-900"
                } focus:outline-none`}
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
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                darkMode ? "bg-gray-900" : "bg-white"
            }`}
            >
            <div className="flex flex-col px-3 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                
                
                {/* Only show navigation items when searchQuery is empty */}
                <>
                    <a
                    href="/"
                    className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-quickSand font-semibold text-md`}
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
                        className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} flex items-center justify-between w-full font-quickSand text-md font-semibold`}
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
                        className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} flex items-center justify-between w-full font-semibold text-md font-quickSand`}
                    >
                        Computers <ChevronDown className="ml-1" size={16} />
                    </button>
                    {/* Rest of computers dropdown */}
                    </div>

                    <a
                    href="/"
                    className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"} font-semibold text-md font-quickSand`}
                    >
                    News
                    </a>
                </>
            </div>
            <div
                className={`pt-4 pb-3 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
                }`}
            >
                <div className="flex items-center px-5 justify-center">
                <div className="flex-shrink-0">
                    {/* Add user avatar here if available */}
                </div>
                <div className="items-center justify-center">
                    <div
                    className={`text-base font-medium ${
                        darkMode ? "text-white" : "text-blue-800"
                    } text-center`}
                    >
                    {user ? user.name : "Guest"}
                    </div>
                </div>
                </div>
                <div className="mt-5 flex justify-center">
                {user ? (
                    <button
                    onClick={logout}
                    className={`block text-center px-3 py-2 rounded-md text-base font-medium ${
                        darkMode
                        ? "ring-1 ring-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
                        : "ring-1 ring-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    >
                    Sign out
                    </button>
                ) : (
                    <Link
                    to="/login"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                        darkMode
                        ? "ring-1 ring-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
                        : "ring-1 ring-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
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

export default Header;