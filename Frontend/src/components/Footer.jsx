const Footer = () => {
  return (
    <footer className="bg-[#346fb3]  text-slate-300 mt-16">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Shree RadhaKripa Property Dealer
          </h3>
          <p className="text-sm">
            Trusted local property dealer for rental flats, rooms and shops.
            Quick response and verified properties.
          </p>
        </div>


        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Flat for Rent</li>
            <li>Room / PG</li>
            <li>Shop & Office Rent</li>
            <li>Property Consultation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Indarapuram, near Sector 62</li>
            <li>📞 +91 8510992504</li>
            <li>📞 +91 8510992504</li>
            <li>💬 WhatsApp Available</li>
          </ul>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Shree RadhaKripa Property Dealer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
