import React from "react";
function Footer() {
  return (
    <footer className="text-gray-300 rounded-t-2xl min-h-[150px] bg-stone-900 mt-9">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full mb-4 md:w-auto md:mb-0">
            <h2 className="text-lg font-bold">ShowFinder</h2>
          </div>
          <div className="flex justify-center w-full mb-4 md:w-auto md:mb-0">
            <a href="#" className="mx-3 hover:text-white">Shows</a>
            <a href="#" className="mx-3 hover:text-white">Contact</a>
            <a href="#" className="mx-3 hover:text-white">Tickets</a>
            <a href="#" className="mx-3 hover:text-white">Cinemas</a>
          </div>
          <div className="flex justify-end w-full md:w-auto">
            <div className="flex items-center">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
