import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 p-4 fixed top-0 left-0 w-full z-10">
    <div className="container-fluid mx-auto flex justify-between items-center">
      <Link href="/"
         className="text-white font-bold text-xl">OYO
      </Link>
      <div className="space-x-4">
        <Link href="#" className="text-white">Home</Link>
        <Link href="#" className="text-white">Offers</Link>
        <Link href="/Sign-in" className="text-white">Sign-in</Link>
        <Link href="/Sign-up" className="text-white">Sign-up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
