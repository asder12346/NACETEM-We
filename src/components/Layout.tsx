import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Mail, Twitter, Facebook, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { NacetemLogo } from './NacetemLogo';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Research', 
      href: '/research',
      children: [
        { name: 'Seminar Series', href: '/research/seminar-series' }
      ]
    },
    { name: 'Capacity Building', href: '/capacity-building' },
    { name: 'PSR Test', href: '/psr-test' },
    { name: 'Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-slate-100 text-slate-600 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-200 flex justify-between items-center font-medium uppercase tracking-wider">
        <span className="hidden sm:inline-block">Federal Ministry of Innovation, Science and Technology</span>
        <span className="sm:hidden">FMIST Nigeria</span>
        <div className="flex items-center space-x-4">
          <Link to="/admin" className="hover:text-emerald-700 flex items-center transition-colors">
            Staff Portal <ExternalLink className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-50 sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="hover:opacity-90 transition-opacity pb-1 block">
              <NacetemLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      'text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center',
                      item.name === 'PSR Test'
                        ? `px-4 py-2 rounded shadow-sm border ${isActive(item.href) ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600'}`
                        : cn(
                            'py-2 border-b-2',
                            isActive(item.href) && !item.children
                              ? 'border-emerald-600 text-slate-900 opacity-100'
                              : 'border-transparent text-slate-900 opacity-70 hover:opacity-100 hover:border-slate-300'
                          )
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-3 h-3 ml-1 mb-[2px]" />
                    )}
                  </Link>

                  {item.children && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-slate-200 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => {
                      if (!item.children) setIsMobileMenuOpen(false);
                    }}
                    className={cn(
                      'flex items-center justify-between px-3 py-2 rounded-md text-base font-medium',
                      item.name === 'PSR Test' 
                        ? 'bg-emerald-600 text-white shadow-sm mt-2 font-bold tracking-wide uppercase text-sm'
                        : isActive(item.href) && !item.children
                          ? 'bg-emerald-50 text-emerald-800'
                          : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {item.children && (
                    <div className="pl-4 pr-3 py-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-sm font-medium text-slate-500 hover:text-emerald-700 hover:bg-slate-50 rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-emerald-600 text-white font-sans border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Logo space */}
            <div className="space-y-6">
              <NacetemLogo variant="light" />
              <p className="text-sm text-emerald-50 max-w-xs leading-relaxed opacity-90">
                NACETEM is a national institution advancing science, technology and innovation for evidence-based development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 opacity-70">Agency</h3>
              <ul className="space-y-3 font-medium text-sm">
                {['About Us', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'About Us' ? '/about' : '/contact'} className="hover:text-emerald-200 flex items-center transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-70" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mt-8 mb-5 opacity-70">News & Events</h3>
              <ul className="space-y-3 font-medium text-sm">
                {['Latest News', 'Upcoming Events', 'Past Events'].map((item) => (
                  <li key={item}>
                    <Link to="/news" className="hover:text-emerald-200 flex items-center transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-70" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 opacity-70">Research & Capacity</h3>
              <ul className="space-y-3 font-medium text-sm">
                {['Research', 'Capacity Building', 'STI Indicator Dashboard', 'PSR Test'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-emerald-200 flex items-center transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-70" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs font-bold text-white uppercase tracking-wider mt-8 mb-5 opacity-70">Publications</h3>
              <ul className="space-y-3 font-medium text-sm">
                {['Policy Brief', 'Technical Report', 'Newsletter'].map((item) => (
                  <li key={item}>
                    <Link to="/publications" className="hover:text-emerald-200 flex items-center transition-colors">
                      <ChevronRight className="h-4 w-4 mr-1 opacity-70" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-5 opacity-70">Connect With Us</h3>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-emerald-50 hover:text-white p-2 border border-emerald-400/30 rounded-sm transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="text-emerald-50 hover:text-white p-2 border border-emerald-400/30 rounded-sm transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-emerald-50 hover:text-white p-2 border border-emerald-400/30 rounded-sm transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-emerald-500 text-xs text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-emerald-100">
            <p>
              &copy; {new Date().getFullYear()} NACETEM. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <Link to="/admin" className="hover:text-white transition-colors">Admin Login</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
