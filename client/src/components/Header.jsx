import { useState } from "react";
import HamburgerHeader from "./HamburgerHeader";
import MainHeader from "./MainHeader";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='bg-red-200'>
        <div className='h-24 max-w-[1240px] mx-auto flex items-center justify-between px-8'>
            <MainHeader toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
        <div className="max-w-[1240px] mx-auto px-8">
            {isOpen && (
              <HamburgerHeader/>
            )}
        </div>
    </div>
  )
}


