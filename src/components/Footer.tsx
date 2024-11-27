import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Karakana Outlets Limited</h3>
            <p>Your Trusted Partner in General Supplies and Construction</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Beverly Court, Marcus Garvey Rd</p>
            <p>P.O. Box 1995-00100, Nairobi</p>
            <p>Phone: 0725 675208 | 0732 200038</p>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              {['Home', 'About Us', 'Services', 'Management', 'Clients', 'Contact'].map((item) => (
                <li key={item} className="mb-1">
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Karakana Outlets Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

