import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center">
          <div className="bg-white w-28 h-28 flex items-center justify-center rounded-full">
            <Image
              src={require("../../../public/images/logo.png")}
              alt="Tanmoy"
              height={100}
              width={100}
            />
          </div>
        </div>

        <div className="h-8" />

        {/* Instagram Follow Button */}
        <div className="text-center mb-8">
          <a
            href="https://www.instagram.com/tanmoy_photography_flims_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            <Instagram className="mr-2" size={20} />
            Follow us on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Wedding Photography & Films</li>
              <li className="text-sm">Pre Wedding Photography & Films</li>
              <li className="text-sm">Baby Shoot Photography</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:tanmoyphotography93@gmail.com"
                  className="hover:text-gray-300"
                >
                  tanmoyphotography93@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+918906116866" className="hover:text-gray-300">
                  +91 8906116866
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+918240422454" className="hover:text-gray-300">
                  +91 8240422454
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Tollygunge, Asansol, India, 700040</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tanmoy.kumbhakar.56"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/tanmoy_photography_flims_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@tanmoyphotographyflims5289"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tanmoy Photography & Films. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
