import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Karakana Outlets Limited" width={150} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About Us', 'Services', 'Management', 'Clients', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

