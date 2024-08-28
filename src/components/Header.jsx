import { useState } from 'react';
import logo from '../assets/logo-horiz-charik-1.webp';
import Search from './Search';
import DropDownMenu from './menus/DropDownMenu';
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import MobileMenu from './menus/MobileMenu';
import { Link } from 'react-router-dom';

// Define the list arrays for the Charik and Ressources and languages  menus
const charikItems = ['Software 🦚', 'Email Finder 💌', 'Company Search 🔎'];
const ressourcesItems = ['Insights', 'FAQ', 'SPF Tester'];
const languages = ['Français', 'English']

function Header() {
    // Separate state to control each dropdown menu at once 
    const [isCharikOpen, setIsCharikOpen] = useState(false);
    const [isRessourcesOpen, setIsRessourcesOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Français');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
    

    // Function to handle opening/closing specific dropdown menus
    const handleCharikToggle = (isOpen) => {
        setIsCharikOpen(isOpen);
    };

    const handleRessourcesToggle = (isOpen) => {
        setIsRessourcesOpen(isOpen);
    };
    //this fct is resposible for language switch
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Close the language menu after selection
        setIsLanguagesOpen(false);
    };

    return (
        <>
            <nav className="flex justify-between px-6 py-[18px] w-full bg-white max-w-[1380px]">
                {/* Logo section */}
                <div>
                    <Link to='/'>
                        <img src={logo} className="w-[253.5px] h-[76.17]" />
                    </Link>
                </div>
                {/* Navigation links */}
                <div className="flex items-center justify-end flex-wrap px-[12px]">
                    {/*menu items*/}
                    <div className="border-r-2 max-[1139px]:hidden">
                        <ul className="flex">
                            <li
                                className="custom-li-nav"
                                onMouseOver={() => handleCharikToggle(true)}
                                onMouseOut={() => handleCharikToggle(false)}
                            >
                                <a href="" className="anchor-link-nav">
                                    Charik
                                </a>
                                {/* Pass handleCharikToggle as a prop to control the dropdown state */}
                                {isCharikOpen && <DropDownMenu itemsArr={charikItems} />}
                            </li>
                            <li className="custom-li-nav">
                                <a href="" className="anchor-link-nav">
                                    Tarifs
                                </a>
                            </li>
                            <li className="custom-li-nav">
                                <a href="" className="anchor-link-nav">
                                    <Link to='/props'>
                                        À propos
                                    </Link>
                                </a>
                            </li>
                            <li
                                className="custom-li-nav"
                                onMouseOver={() => handleRessourcesToggle(true)}
                                onMouseOut={() => handleRessourcesToggle(false)}
                            >
                                <a href="" className="anchor-link-nav">
                                    Ressources
                                </a>
                                {/* Pass handleRessourcesToggle as a prop to control the dropdown state */}
                                {isRessourcesOpen && <DropDownMenu itemsArr={ressourcesItems} />}
                            </li>
                        </ul>
                    </div>
                    {/* Search and other elements */}
                    <div className="flex items-center">
                        <div className='flex max-[768px]:flex-row-reverse '>
                            <Search />
                            {/*languages menu */}
                            <div className=' ml-6 relative max-[768px]:mr-[-30px]'>
                                <button
                                    onClick={() => setIsLanguagesOpen(!isLanguagesOpen)}
                                    className='flex items-center gap-1 max-[768px]:mr-6'>
                                    {/*showing the appropriate sign based on the selected language */}
                                    <span>{selectedLanguage == 'Français' ? 'FR' : 'EN'}</span>
                                    <IoIosArrowDown />
                                </button>
                                {isLanguagesOpen && (
                                    <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                                        <ul>
                                            {languages.map((language, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => handleLanguageChange(language)}
                                                >
                                                    {language}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="cursor-pointer bg-red-500 flex items-center justify-center ml-[21.6px] rounded-lg 
                            transition-transform duration-100 hover:scale-105">
                            <a
                                target="_blank"
                                href="https://www.charik.fr/meetings/jimmy5/demo?hsLang=fr&uuid=e7e4a641-e095-4a22-860d-287ead67b895"
                                className="text-white text-[16.02px] px-[16.52px] py-[11.38px] max-[768px]:hidden"
                            >
                                Demo
                            </a>
                        </div>

                        {/*mobile menu toglle button*/}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className=' ml-6 breakpoint-1:hidden max-[768px]:ml-0'>
                            <IoMenuSharp size={25} />
                        </button>
                    </div>
                </div>
            </nav>
            {/*passing the onClose fct and the booleen as props to the mobile menu component  */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() =>setIsMobileMenuOpen(false)}/>
        </>
    );
}

export default Header;
