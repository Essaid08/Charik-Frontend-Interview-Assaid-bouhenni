import { useState, useRef, useEffect } from "react";
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";

/* This component is responsible for showing the search bar */
function Search() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const inputRef = useRef(null); // Reference to the input element

    const handleSearch = () => {
        // This function is responsible for opening the search view
        setIsSearchActive(true);
    };

    const handleClose = () => {
        // This function is responsible for closing the search view
        setIsSearchActive(false);
    };

    useEffect(() => {
        if (isSearchActive && inputRef.current) {
            inputRef.current.focus(); // Focus the input field when the search view is active
        }
    }, [isSearchActive]);

    return (
        <>
            <div className="pl-[21.65px] flex items-center justify-center">
                <button onClick={handleSearch}>
                    <IoSearchOutline size={22} />
                </button>
            </div>
            {/* Conditionally render the search view based on the isSearchActive state */}
            {isSearchActive && (
                <div 
                className={`fixed inset-0 bg-white z-50 flex flex-col items-center p-4 md:p-8 overflow-x-hidden transition-opacity duration-500 ease-in-out
                    ${isSearchActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }}>
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                        <button onClick={handleClose}>
                            <IoCloseSharp size={32} />
                        </button>
                    </div>
                    <div className="relative flex mt-64 w-full max-w-2xl transform -translate-y-4">
                        <input
                            ref={inputRef} // Attach the ref to the input field
                            type="text"
                            placeholder="Search our website"
                            className="w-full py-4  text-lg border-2 border-gray-300 focus:outline-none rounded-full pl-12 shadow-lg"
                        />
                        <button className="absolute right-6 top-1/2 transform -translate-y-1/2">
                            <IoSearchOutline size={22} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Search;
