import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 p-4 fixed top-0 left-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/"
         className="text-white font-bold text-xl">OYO
      </Link>
      <div className="space-x-4">
        <Link href="#" className="text-white">Home</Link>
        <Link href="#" className="text-white">Offers</Link>
        <Link href="#" className="text-white">Login / Signup</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
