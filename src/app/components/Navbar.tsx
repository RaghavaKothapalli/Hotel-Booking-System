import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-gray-900 p-4 fixed  text-black top-0 left-0 w-full z-10">
    <div className="container-fluid mx-auto flex justify-between items-center">
      <Link href="/"
         className="text-white font-bold text-xl">Hotel Booking
      </Link>
      <div className="space-x-4">
        <Link href="#" className="text-black">Home</Link>
        <Link href="#" className="text-black">Offers</Link>
        <Link href="/Sign-in" className="text-black">Sign-in</Link>
        <Link href="/Sign-up" className="text-black">Sign-up</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
