import React, { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleMenuClick}
      >
        Menu
      </button>

      {/* Contenuto del menu */}
      {isOpen && (
        <div className="absoluteright-0 mt-2 py-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
          <a
            href="#skills"
            className="bpx-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Skills
          </a>
          <a
            href="#certificazioni"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Sezione 2
          </a>
          <a
            href="#lab"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Sezione 3
          </a>
          {/* Aggiungi ulteriori voci del menu qui */}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
