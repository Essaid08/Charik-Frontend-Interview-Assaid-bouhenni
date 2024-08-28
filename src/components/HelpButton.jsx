import { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";

const HelpButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    // Function to check the scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px from the top window
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", toggleVisibility);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <>
            {
                isVisible && (
                    <div className="fixed bottom-5 right-5 z-50">
                        <button className="bg-[#FF7F63] text-white p-4 border-2 border-l-orange-50 rounded-full 
                                            shadow-lg hover:bg-[#555] transition-all duration-200">
                            <AiFillMessage size={32} />
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default HelpButton;
