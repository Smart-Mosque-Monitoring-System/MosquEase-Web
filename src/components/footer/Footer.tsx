import { Link } from "react-router-dom";

const Footer = () => {
  return ( 
    <footer className="flex flex-col gap-2 sm:flex-row py-6 mt-20 w-full shrink-0 items-center px-4 md:px-6 border-t fixed bottom-0 bg-white">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; 2024 MosquEase. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/about" className="text-xs hover:underline underline-offset-4">
          About Us
        </Link>
        <Link to="/terms" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
