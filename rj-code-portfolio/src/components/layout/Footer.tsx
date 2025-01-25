import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              RJCode
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming ideas into elegant digital solutions. Specializing in web development,
              software engineering, and creative tech solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-100">Get in Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:contact@rjcodeit.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              >
                <HiMail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                contact@rjcodeit.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {currentYear} RJCode. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {[
                { icon: FaGithub, href: 'https://github.com' },
                { icon: FaLinkedin, href: 'https://linkedin.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6 hover:scale-110 transform transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}