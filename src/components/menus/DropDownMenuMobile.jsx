

/* this componets responsible for accepting and rendring the diserd list in the navbar through the charik and ressurces items for mobile devices*/
const DropDownMenuMobile = ({ itemsArr }) => {
    return (
        <div className=" bg-slate-100 w-full mt-2 rounded-md shadow-lg p-2">
            <ul className="flex flex-col" role="menu">
                {itemsArr.map((item, i) => (
                    <li
                        key={i}
                        className="text px-2 py-3  hover:text-red-500 transition-colors duration-200"
                        role="menuitem"
                    >
                        <a href="">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenuMobile;
