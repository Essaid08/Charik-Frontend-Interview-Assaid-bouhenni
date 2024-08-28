

/* this componets responsible for accepting and rendring the diserd list in the navbar through the charik and ressurces items */
const DropDownMenu = ({ itemsArr }) => {
    return (
        <div className="absolute top-9 bg-white w-48 mt-2 rounded-md shadow-lg p-2">
            <ul className="flex flex-col" role="menu">
                {itemsArr.map((item, i) => (
                    <li
                        key={i}
                        className="text px-2 py-3 border-b-2  border-gray-200 last:border-b-0 hover:bg-slate-50 transition-colors duration-200"
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

export default DropDownMenu;
