
const Footer = () => {
  const copyYear = new Date().getUTCFullYear()
  return (
    <>
      <footer className="flex flex-col bg-gray-400">
        <div className="md:flex md:py-6 md:px-14">
          <div className=" md:max-w-[33%] px-4">
            <h2 className="text-xl font-semibold md:border-b border-gray-500 pb-4">Kipngetich Designs</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni incidunt 
              expedita error eligendi libero officia perferendis eveniet ex molestiae sequi?
            </p>
            <ul className=" mt-4 ">
              <li className="m-2"><a href="/about">About </a></li>
              <li className="m-2"><a href="/portfolio">Portfolio </a></li>
              <li className="m-2"><a href="/contact">Contact Us </a></li>
            </ul>
          </div>
          <div className=" min-w-[33%] px-4">
            <h2 className="text-xl font-semibold md:border-b border-gray-500 pb-4">Quick Links</h2>
            <ul className="mt-4">
              <li className="m-2"><a href="/about">About </a></li>
              <li className="m-2"><a href="/portfolio">Portfolio </a></li>
              <li className="m-2"><a href="/contact">Contact Us </a></li>
            </ul>
          </div>
          <div className=" min-w-[33%] px-4">
            <h2 className="text-xl font-semibold md:border-b border-gray-500 pb-4">Contact Us</h2>
            <ul className="mt-4">
              <li className="py-1">Mobile number : +254718479237 | +254768418735</li>
              <li className="py-1">Email Address : info@renwinltd.com</li>
              <li className="py-1">Our Mail Box: 21917-00100 Nairobi</li>
              <li className="py-1">Maendeleo House, 3rd Floor; Loita Street, Nairobi</li>
            </ul>
            
          </div>
        </div>
        <div className="md:flex items-center justify-between md:mx-14 py-1 md:border-b md:border-t border-gray-500 mb-4 mt-0 px-4">
          <p className="text-xl font-semibold">Follow us</p>
          <ul className="md:flex mr-4">
            <li className="px-2"><a href="">Facebook</a></li>
            <li className="px-2"><a href="">Twitter</a></li>
            <li className="px-2"><a href="">LinkedIn</a></li>
          </ul>
        </div>
        <div className="bg-gray-600 md:px-14 px-4 py-2">
          <p>Lorem ipsum. &copy; 2022 - { copyYear } All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer