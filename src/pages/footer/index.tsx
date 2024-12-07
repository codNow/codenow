import { CommonProps } from "@/components/types";
import React from "react";


const Footer: React.FC<CommonProps> = ({darkMode}) => {
    return (
        <footer className={`flex justify-between items-center  py-10 px-8 border-t-2  ${darkMode ? "bg-slate-950 text-gray-400 border-gray-900" : "bg-white text-gray-900 border-gray-100"}`}>
        <div className="flex items-center">
            <a href="https://codewithcodenow.com" className="mr-4">© Code with CodeNow</a>
        </div>
        <div className="flex">
            <a href="https://www.youtube.com/user/programmingwithmosh" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.997 6.91l-6.308 3.452c-.53.292-.996.034-.996-.576V8.723c0-.61.466-.868.996-.576l6.308 3.452c.53.292.53.768 0 1.06z" />
            </svg>
            </a>
            <a href="https://twitter.com/moshhamedani" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.087-.6-.087-.914a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
            </svg>
            </a>
            <a href="https://www.facebook.com/moshhamedani" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.187 15.629h-2.443v-6.859h-1.221v-2.13h1.221v-1.364c0-1.214.587-3.109 3.109-3.109l2.28.009v2.048h-1.654c-.271 0-.657.136-.657.719v1.697h2.336l-.273 2.13h-2.063v6.859z" />
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/moshhamedani/" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            </a>
            <a href="https://www.instagram.com/moshhamedani/" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
            </a>
            <a href="https://www.tiktok.com/@moshhamedani" className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82a4.34 4.34 0 0 1-4.35-4.36V.2h-3.91v13.11a2.78 2.78 0 0 1-4.9 1.95 2.78 2.78 0 0 1 1.95-4.9 2.81 2.81 0 0 1 1 .19V6.62a6.35 6.35 0 0 0-2-.32 6.4 6.4 0 0 0 0 12.8 6.4 6.4 0 0 0 6.4-6.4V9.12a4.35 4.35 0 0 0 4.36 4.35 4.36 4.36 0 0 0 4.35-4.35 4.23 4.23 0 0 0-.1-.95z" />
            </svg>
            </a>
        </div>
        <div className="flex items-center">
            <a href="/terms-of-use" className="mr-4">Terms of Use</a>
            <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
        </div>
        </footer>
    );
};

export default Footer;