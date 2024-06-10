import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../../public/assets/logo-png.png"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Firm Logo"
            width={50}
            height={50}
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#about" className="hover-link">About Us</Link>
          <Link href="#services" className="hover-link">Our Services</Link>
          <Link href="#experience" className="hover-link">Previous Experience</Link>
          <Link href="#founders" className="hover-link">Founders</Link>
          <Link href="#contact" className="hover-link">Contact Us</Link>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
