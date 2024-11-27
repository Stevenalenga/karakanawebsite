import Link from 'next/link'

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold">Karakana Outlets</h1>
      <nav>
        <Link href="/" className="px-4">Home</Link>
        <Link href="/About-Us" className="px-4">About Us</Link>
        <Link href="/Services" className="px-4">Services</Link>
        <Link href="/Management" className="px-4">Management</Link>
        <Link href="/Clients" className="px-4">Clients</Link>
        <Link href="/Contact-Us" className="px-4">Contact Us</Link>
      </nav>
    </div>
  </header>
);

export default Header;