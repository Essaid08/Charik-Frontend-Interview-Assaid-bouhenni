import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="max-w-[1380px] py-32 px-8 flex flex-col items-center mx-auto">
            {/* Main footer content area */}
            <div className="flex flex-col justify-center items-center breakpoint-1:flex-row breakpoint-1:items-start breakpoint-1:gap-36">
                
                {/* "À propos de Charik" section with social media icons */}
                <div className="flex flex-col justify-start items-center breakpoint-1:items-start">
                    <h4 className="text-[#222326] text-[22px] mb-5">À propos de Charik</h4>
                    <p className="text-[#6A6D77] m-6 text-[16px] max-w-80 text-center breakpoint-1:text-left">
                        Nous rationalisons la saisie de données et la collecte d'informations pour que les commerciaux puissent se concentrer sur l'engagement client et la réalisation de ventes.
                    </p>
                    <div className="flex items-center justify-center mt-6 mb-9 gap-6">
                        <a className="cursor-pointer"><FaLinkedin size={36} color="red" /></a>
                        <a className="cursor-pointer"><FaTwitter size={36} color="red" /></a>
                        <a className="cursor-pointer"><FaInstagram size={36} color="red" /></a>
                        <a className="cursor-pointer"><FaFacebook size={36} color="red" /></a>
                        <a className="cursor-pointer"><FaYoutube size={38} color="red" /></a>
                    </div>
                </div>

                {/* Links sections: Fonctionnalités, Société, Resources */}
                <div className="flex w-full flex-col items-center justify-center md:gap-28 md:py-6 md:flex-row breakpoint-1:gap-40">
                    
                    {/* Fonctionnalités */}
                    <div className="flex flex-col items-center justify-center text-center mb-8 md:items-start md:text-start">
                        <h4 className="text-[#222326] text-[22px] mb-5">Fonctionnalités</h4>
                        <ul>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Email Finder 💌</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Company Search 🔎</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">KeyPeople Search 👫</a>
                            </li>
                        </ul>
                    </div>

                    {/* Société */}
                    <div className="flex flex-col items-center justify-center text-center mb-8 md:items-start md:text-start">
                        <h4 className="text-[#222326] text-[22px] mb-5">Société</h4>
                        <ul>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Logiciel Charik 🦚</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">About us</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col items-center justify-center text-center mb-8 md:items-start md:text-start">
                        <h4 className="text-[#222326] text-[22px] mb-5">Resources</h4>
                        <ul>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Notre Blog</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Partners</a>
                            </li>
                            <li className="mb-5">
                                <a className="text-[#6A6D77] text-[18px]" href="">Knowledge base</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider line */}
            <div className="h-[1px] w-[80%] bg-[#dadbe0] mt-5"></div>

            {/* Footer bottom area with copyright and legal links */}
            <div className="pt-7 flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="text-[#6A6D77] text-[18px] text-center md:text-left">
                    Copyright © 2024 Charik
                </div>
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    <a className="text-[#6A6D77] text-[18px] hover:text-[#222326] transition-colors duration-200" href="">
                        CGV
                    </a>
                    <a className="text-[#6A6D77] text-[18px] hover:text-[#222326] transition-colors duration-200" href="">
                        Politique de confidentialité
                    </a>
                    <a className="text-[#6A6D77] text-[18px] hover:text-[#222326] transition-colors duration-200" href="">
                        Support@charik.app
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
