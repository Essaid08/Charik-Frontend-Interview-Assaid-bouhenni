import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import DropDownMenuMobile from "./DropDownMenuMobile";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

// Define the list arrays for the Charik and Ressources menus
const charikItems = ['Software 🦚', 'Email Finder 💌', 'Company Search 🔎'];
const ressourcesItems = ['Insights', 'FAQ', 'SPF Tester'];

function MobileMenu({ isOpen, onClose }) {
    // State hooks to manage the open/close state of dropdown menus
    const [isCharikOpen, setIsCharikOpen] = useState(false);
    const [isRessourcesOpen, setIsRessourcesOpen] = useState(false);

    return (
        <div
            className={`fixed flex flex-col inset-0 bg-white z-50 px-0 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Close button */}
            <div className="flex justify-end px-4 py-4 w-full">
                <button onClick={onClose}>
                    <IoCloseSharp size={32} />
                </button>
            </div>

            {/* Navigation list */}
            <ul className="space-y-4 border-b-2 border-gray-200 flex flex-col">
                {/* Charik menu item */}
                <li
                    className="li-nav-mobile"
                    onClick={() => setIsCharikOpen(!isCharikOpen)}
                >
                    <div className="flex items-center justify-between w-full">
                        <a href="#" className="block text-lg font-light">Charik</a>
                        {isCharikOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {/* Conditional rendering of dropdown menu */}
                    {isCharikOpen && <DropDownMenuMobile itemsArr={charikItems} />}
                    {/* Toggles between arrow up and down based on the menu state */}
                </li>

                {/* Tarifs menu item */}
                <li className="li-nav-mobile">
                    <a href="#" className="block text-lg font-light">Tarifs</a>
                </li>

                {/* À propos menu item with routing */}
                <li className="li-nav-mobile">
                    <a href="#" className="block text-lg font-light">
                        <Link to="/props">À propos</Link>
                    </a>
                </li>

                {/* Ressources menu item */}
                <li
                    className="li-nav-mobile border-none"
                    onClick={() => setIsRessourcesOpen(!isRessourcesOpen)}
                >
                    <div className="flex items-center justify-between w-full">
                        <a href="#" className="block text-lg font-light">Ressources</a>
                        {isRessourcesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {/* Conditional rendering of dropdown menu */}
                    {isRessourcesOpen && <DropDownMenuMobile itemsArr={ressourcesItems} />}
                    {/* Toggles between arrow up and down based on the menu state */}
                </li>

                {/* Demo button */}
                <div className="flex items-center justify-center py-8">
                    <div className="cursor-pointer bg-red-500 flex items-center justify-center ml-[21.6px] rounded-lg transition-transform duration-100 hover:scale-105">
                        <a
                            target="_blank"
                            href="https://www.charik.fr/meetings/jimmy5/demo?hsLang=fr&uuid=e7e4a641-e095-4a22-860d-287ead67b895"
                            className="text-white text-[16.02px] px-[16.52px] py-[11.38px]"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default MobileMenu;
