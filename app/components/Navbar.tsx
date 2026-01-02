import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Tentang Kami", href: "/tentang-kami" },
    { title: "Armada", href: "/armada" },
    { title: "Blog", href: "/blog" },
    { title: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 px-4 py-4">
      {/* Container Nav dengan Glassmorphism */}
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-10 px-6 py-3 
                      backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg"
      >
        {/* Logo Section */}
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg" // Gunakan logo versi gelap/warna asli karena bg sekarang terang
            alt="Sinar Abadi Rent Car Logo"
            width={130}
            height={35}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-slate-800 font-semibold text-lg hover:text-blue-600 transition-all px-3 py-2 rounded-lg 
               `}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://wa.me/628123456789"
            target="_blank"
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-lg 
                       hover:bg-[#20ba5a] hover:shadow-green-200 shadow-md transition-all active:scale-95"
          >
            <FaWhatsapp className="text-2xl" />
            Hubungi Kami
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
