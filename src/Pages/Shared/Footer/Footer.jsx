import React from 'react';
import pharmacareLogo from '../../../assets/pharmacare1.png';

const Footer = () => {
  const footerData = {
    quickLinks: ['Delivery', 'Legal Notice', 'Terms & conditions', 'Secure payment', 'Contact Us', 'About Us'],
    products: ['Prices drop', 'New products', 'Best sellers', 'Sitemap', 'Stores', 'Skin Care'],
    account: ['Order Tracking', 'Sign In', 'Create Account', 'Credit Slip', 'Vouchers', 'Wishlist']
  };

  return (
    <footer className="bg-[#f8f9fa] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 pr-8">
             <div className="flex items-center gap-2 shrink-0">
                      <img src={pharmacareLogo} alt="PharmaCare Logo" className="w-12 " />
                       <span className="text-2xl font-bold text-[#b400dd]">Medinexa</span>
                    </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
             Your health is our priority. We pride ourselves on offering a carefully curated selection of pharmaceutical products, backed by a commitment to exceptional service and professional integrity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerData.quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#b400dd] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*Products */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              {footerData.products.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-[#b400dd] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Info */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">About Information</h4>
            <div className="text-gray-500 text-sm space-y-3">
              <p>PharmaCare </p>
              <p>Kishoreganj, Dhaka, Bangladesh</p>
              <p>Beside the River side.</p>
              <p className="pt-2">Call us: <span className="text-[#b400dd] font-semibold">+8801XXXXXXXX</span></p>
              <p>Email: <span className="text-[#b400dd] font-semibold">admin@example.com</span></p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              Copyright © <span className="font-semibold text-gray-600">PharmaCare</span>. All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;