import Image from 'next/image'

import Button from '../components/Button'

export default function Home() {
  return (
    <div> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <section className="relative h-[600px]">
        <Image
          src="/construction-banner.jpg"
          alt="Construction and Supplies"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Trusted Partner in General Supplies and Construction
            </h1>
            <Button href="/contact-us">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">About Us</h2>
          <p className="text-xl text-center mb-8 text-black">
            Karakana Outlets Limited is a General Supplies and Construction company with over 10 years of experience.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-black">Our Mission</h3>
              <p className="text-black">To provide high-quality supplies and construction services that exceed our clients' expectations.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-black">Our Vision</h3>
              <p className="text-black">To be the leading provider of general supplies and construction services in East Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🔍', value: 'Attention to Detail' },
              { icon: '🤝', value: 'Integrity' },
              { icon: '📊', value: 'Accountability' },
              { icon: '🏆', value: 'Excellence' },
            ].map((item) => (
              <div key={item.value} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}

