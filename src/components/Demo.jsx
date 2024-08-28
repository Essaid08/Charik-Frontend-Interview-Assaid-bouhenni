import { FaLongArrowAltRight } from "react-icons/fa";
import jimmy from "../assets/photo-jimmy-profile.webp"

const Demo = () => {
    return (
        <div className="bg-[#FF7F63] flex flex-col items-center justify-center md:flex-row  py-60 px-6  max-w-[1380px]">
            <div>
                <h2 className="text-[#f2f3f5] text-[36px] mb-6 breakpoint-1:text-[42px] tracking-wider font-bold">
                    Besoin d'une démo ?
                </h2>
            </div>
            <div className="bg-white rounded-2xl px-3 py-3 ml-5 hover:scale-110">
                <a  
                    target="_blank"
                    href="https://www.charik.fr/meetings/jimmy5/demo?hsLang=fr&uuid=e7e4a641-e095-4a22-860d-287ead67b895"
                    className="flex gap-3 items-center justify-center">
                    <img src={jimmy} alt="" className=" w-12 h-12 rounded-full" />
                    <div>
                        <h4 className=" text-[20px] font-normal">Prendre un RDV avec Jimmy</h4>
                        <p className="custom-p">Accédez a son agenda</p>
                    </div>
                    <FaLongArrowAltRight size={28} />
                </a>
            </div>
        </div>
    )
}

export default Demo