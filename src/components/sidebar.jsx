

const Sidebar = (props) => {
  if (!props.isOpen) return null;

  return (
    <div className={`fixed top-0 right-0 z-30 h-full w-64 bg-white shadow-lg transform transition-transform duration-2000 ease-in-out ${
    props.isOpen ? "translate-x-0" : "translate-x-full"
  }`}
  >
      

      {/* Sidebar content */}
      <div className="relative bg-white w-64 h-full shadow-lg p-4">
        <button
          className="text-3xl text-blue-500 absolute top-1 right-4"
          onClick={props.onClose}
        >
          x
        </button>
        <div className="pt-40">
            <ul className="flex flex-col gap-7 items-center font-jakarta text-l font-bold leading-[30px] text-blue-500">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
