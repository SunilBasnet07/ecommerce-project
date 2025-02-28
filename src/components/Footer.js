import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import esewa from "@/assests/esewa.png"
import khalti from "@/assests/khalti.png"
import cashndeliver from "@/assests/cashndeliver.png"
import imepay from "@/assests/imepay.png"
import visa from "@/assests/visa.png"




const Footer = () => {
  return (
    <div className="bg-blue-100 text-white py-12 dark:bg-gray-900 font-Nunito-SemiBold">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Project Aria</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: support@projectaria.com</p>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <iframe
              src="https://maps.google.com/maps?q=Tech%20City%20AI%20Land&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 rounded-lg"
              title="AI Solutions Location"
            ></iframe>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/aisolutions" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
              <Facebook />
              </Link>
              <Link href="https://twitter.com/aisolutions" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
              <Twitter />
              </Link>
              <Link href="https://www.linkedin.com/company/aisolutions" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <Linkedin />
              </Link>
              <Link href="https://www.instagram.com/aisolutions" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
              <Instagram/>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 dark:text-white">
              <li><Link href="/about" className="text-black hover:text-gray-500 dark:text-white">About Us</Link></li>
              <li><Link href="/service" className="text-black hover:text-gray-500 dark:text-white">Our Services</Link></li>
              <li><Link href="/contact" className="text-black hover:text-gray-500 dark:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-black hover:text-gray-500 dark:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <p className="px-2 py2 font-Nunito-Bold dark:text-white">Payment Methods</p>
        <div className="flex justify-start gap-4 px-2 py-4 items-center">
       
       <Image src={esewa} alt="logo" height={90} width={90} className="border px-3 hover:bg-primary-500 rounded-md bg-primary-300 text-white py-1 "/>
       <Image src={imepay} alt="logo" height={90} width={90} className="border px-3 hover:bg-primary-500 rounded-md bg-primary-300 text-white py-1 "/>
       <Image src={khalti} alt="logo" height={90} width={90} className="border px-3 hover:bg-primary-500 rounded-md bg-primary-300 text-white py-1 "/>
       <Image src={visa} alt="logo" height={90} width={90} className="border px-3 rounded-md hover:bg-primary-500 bg-primary-300 text-white py-1 "/>
       <Image src={cashndeliver} alt="logo" height={90} width={90} className="border hover:bg-primary-500 px-3 rounded-md bg-primary-300 text-white py-1 "/>
      
  
     </div>

        </div>
      

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Project Aria. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
