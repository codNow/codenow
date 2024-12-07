
import { TbBrandAndroid } from "react-icons/tb";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoIosTabletLandscape } from "react-icons/io";
import { FaLaptop } from "react-icons/fa6";
import { RiMacbookLine } from "react-icons/ri";
import { RxDesktop } from "react-icons/rx";


export interface HeaderProps {
    toggleDarkMode: () => void;
    darkMode: boolean
}



export interface CommonProps {
    darkMode: boolean;
}

export interface UserLogIn {
    email: string;
    password: string;
}

export interface UserRegister {
    email:string;
    password: string;
    usename: string;
}




export interface DropdownProps {
    title: string;
    href: string;
    description: string;
    icon: React.ReactElement;
}

export const dropdown1 : DropdownProps[] = [
    {
        title: "React Native Course",
        icon: <TbBrandAndroid className="w-5 h-5 mr-2" />,
        href: "/android",
        description: "All apps and games available for Android OS"
    },
    {
        title: "React With Typescript",
        icon: <FaAppStoreIos className="w-5 h-5 mr-2" />,
        href: "/ios",
        description: "All apps and games available for IOS downloads from here"
    },
    {
        title: "React With Javascript",
        icon: <IoIosTabletLandscape className="w-5 h-5 mr-2" />,
        href: "/folding",
        description: "All apps and games for Folding Phone download can be done from here now!"
    },

]
export const dropdown2 : DropdownProps[] = [
    {
        title: "Laptop",
        icon: <FaLaptop className="w-5 h-5 mr-2" />,
        href: "/laptop",
        description: "All apps and games availabe for windows Laptop"
    },
    {
        title: "Macbook",
        icon: <RiMacbookLine className="w-5 h-5 mr-2" />,
        href: "/mackbook",
        description: "All apps and games available for Mackbook"
    },
    {
        title: "Desktop",
        icon: <RxDesktop className="w-5 h-5 mr-2" />,
        href: "/desktop",
        description: "All apps and games available  for  windows Desktop Computer & Mac"
    },
    {
        title: "Mac",
        icon: <RxDesktop className="w-5 h-5 mr-2" />,
        href: "/desktop",
        description: "All apps and games available  for  windows Desktop Computer & Mac"
    },
]