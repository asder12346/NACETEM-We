import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import { Lock, FileText, Users, Settings, LogOut, LayoutDashboard, Search, Bell, Image as ImageIcon, Calendar, Plus, Trash2 } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/admin');
    } else {
      setError('Invalid email or password access denied.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 sm:p-12 w-full max-w-md border border-slate-200">
        <div className="mb-8">
          <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">Secure Admin Access</span>
          <h2 className="text-3xl font-serif text-slate-900 leading-none mb-2">Portal Login</h2>
          <p className="text-slate-500 text-xs">NACETEM Extranet Authorized Access Only</p>
        </div>
        
        {error && <div className="p-3 bg-red-50 text-red-700 text-xs border border-red-200 mb-6">{error}</div>}
        
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-700 outline-none text-sm bg-slate-50 focus:bg-white transition-colors"
              placeholder="adminacetem@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-700 outline-none text-sm bg-slate-50 focus:bg-white transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest py-4 transition-colors"
          >
            Authenticate
          </button>
        </form>
        <div className="mt-8 text-center text-[10px] tracking-widest uppercase text-slate-400">
          Protected by FMIST Infrastructure
        </div>
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const { logout } = useAuth();
  const { gallery, addGalleryImage, removeGalleryImage, events, addEvent, removeEvent, isLoading } = useData();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageTitle, setNewImageTitle] = useState('');

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newImageUrl && newImageTitle) {
      addGalleryImage({
        id: Date.now().toString(),
        url: newImageUrl,
        title: newImageTitle,
      });
      setNewImageUrl('');
      setNewImageTitle('');
    }
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEventTitle && newEventDate && newEventLocation && newEventDescription) {
      addEvent({
        id: Date.now().toString(),
        title: newEventTitle,
        date: newEventDate,
        location: newEventLocation,
        description: newEventDescription,
      });
      setNewEventTitle('');
      setNewEventDate('');
      setNewEventLocation('');
      setNewEventDescription('');
    }
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: ImageIcon, label: 'Gallery Manager' },
    { icon: Calendar, label: 'Events Manager' },
    { icon: Users, label: 'User Management' },
    { icon: FileText, label: 'Content Manager' },
    { icon: Settings, label: 'System Settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold tracking-widest text-white uppercase">NACETEM</h2>
          <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-1">
          {menuItems.map((item, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === item.label ? 'bg-emerald-600 text-white' : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center w-96">
            <div className="relative w-full">
              <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-400 hover:text-slate-600 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8 bg-slate-50 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Syncing with Supabase...</p>
              </div>
            </div>
          )}
          <span className="text-gold text-[10px] uppercase tracking-widest font-bold mb-2 block">
            {activeTab === 'Overview' ? 'Dashboard' : activeTab}
          </span>
          <h1 className="text-3xl font-serif text-slate-900 mb-8">
            {activeTab === 'Overview' && 'Systems Overview'}
            {activeTab === 'Gallery Manager' && 'Gallery Media'}
            {activeTab === 'Events Manager' && 'Events Calendar'}
            {activeTab !== 'Overview' && activeTab !== 'Gallery Manager' && activeTab !== 'Events Manager' && activeTab}
          </h1>

          {activeTab === 'Overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 border border-slate-200 flex items-center space-x-4">
                  <div className="h-12 w-12 bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Total Users</p>
                    <h3 className="text-2xl font-serif text-slate-900">1,248</h3>
                  </div>
                </div>
                <div className="bg-white p-6 border border-slate-200 flex items-center space-x-4">
                  <div className="h-12 w-12 bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Gallery Items</p>
                    <h3 className="text-2xl font-serif text-slate-900">{gallery.length}</h3>
                  </div>
                </div>
                <div className="bg-white p-6 border border-slate-200 flex items-center space-x-4">
                  <div className="h-12 w-12 bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Active Events</p>
                    <h3 className="text-2xl font-serif text-slate-900">{events.length}</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-white">
                  <h2 className="font-serif text-lg text-slate-900">Recent Registrations</h2>
                  <button className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-emerald-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="px-6 py-4 font-medium text-[10px] uppercase tracking-widest">Name</th>
                        <th className="px-6 py-4 font-medium text-[10px] uppercase tracking-widest">Email</th>
                        <th className="px-6 py-4 font-medium text-[10px] uppercase tracking-widest">Role</th>
                        <th className="px-6 py-4 font-medium text-[10px] uppercase tracking-widest">Date Joined</th>
                        <th className="px-6 py-4 font-medium text-[10px] uppercase tracking-widest text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {[
                        { name: "Dr. Adebayo Johnson", email: "adebayo.j@nacetem.gov.ng", role: "Researcher", date: "Oct 24, 2026", status: "Active" },
                        { name: "Sarah Oluwaseun", email: "s.oluwaseun@nacetem.gov.ng", role: "Content Editor", date: "Oct 21, 2026", status: "Active" },
                        { name: "System Administrator", email: "adminacetem@gmail.com", role: "Superadmin", date: "Jan 10, 2026", status: "Active" },
                        { name: "Michael Obi", email: "m.obi@nacetem.gov.ng", role: "Guest User", date: "Oct 15, 2026", status: "Pending" }
                      ].map((user, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900">{user.name}</td>
                          <td className="px-6 py-4 text-slate-500 text-xs">{user.email}</td>
                          <td className="px-6 py-4"><span className="px-2 py-1 border border-slate-200 bg-white text-slate-600 text-[10px] font-bold uppercase tracking-widest">{user.role}</span></td>
                          <td className="px-6 py-4 text-slate-500 text-xs">{user.date}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                              user.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'Gallery Manager' && (
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 p-6">
                <h2 className="text-lg font-serif text-slate-900 mb-4">Add New Image</h2>
                <form onSubmit={handleAddImage} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input 
                      type="url" 
                      placeholder="Image URL (e.g. Unsplash URL)"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Image Title"
                      value={newImageTitle}
                      onChange={(e) => setNewImageTitle(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700"
                      required
                    />
                  </div>
                  <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-colors">
                    <Plus className="w-4 h-4 mr-2" /> Add Image
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((img) => (
                  <div key={img.id} className="bg-white border border-slate-200 group flex flex-col">
                    <div className="h-48 overflow-hidden border-b border-slate-100">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex justify-between items-center bg-slate-50 flex-1">
                      <h3 className="font-serif text-slate-900 text-sm truncate pr-4">{img.title}</h3>
                      <button 
                        onClick={() => removeGalleryImage(img.id)}
                        className="text-slate-400 hover:text-red-600 transition-colors bg-white p-2 border border-slate-200 rounded-full"
                        title="Remove image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {gallery.length === 0 && (
                  <div className="col-span-full py-12 text-center text-slate-500 border border-dashed border-slate-300 bg-white">
                    No images in the gallery. Add one above.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'Events Manager' && (
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 p-6">
                <h2 className="text-lg font-serif text-slate-900 mb-4">Add New Event</h2>
                <form onSubmit={handleAddEvent} className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Event Title"
                        value={newEventTitle}
                        onChange={(e) => setNewEventTitle(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Event Date (e.g., August 15, 2026)"
                        value={newEventDate}
                        onChange={(e) => setNewEventDate(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Event Location (e.g., Abuja, Nigeria)"
                        value={newEventLocation}
                        onChange={(e) => setNewEventLocation(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <textarea
                      placeholder="Event Description"
                      value={newEventDescription}
                      onChange={(e) => setNewEventDescription(e.target.value)}
                      className="w-full sm:flex-1 h-24 px-4 py-3 border border-slate-300 text-sm focus:outline-none focus:border-emerald-700 resize-none"
                      required
                    ></textarea>
                    <button type="submit" className="w-full sm:w-auto self-stretch bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-colors shrink-0">
                      <Plus className="w-4 h-4 mr-2" /> Add Event
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((evt) => (
                  <div key={evt.id} className="bg-white border border-slate-200 p-6 relative flex flex-col items-start group">
                    <button 
                      onClick={() => removeEvent(evt.id)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-red-600 transition-colors bg-white p-2 border border-slate-200 rounded-full opacity-0 group-hover:opacity-100"
                      title="Remove event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">{evt.date}</span>
                    </div>
                    <h3 className="text-lg font-serif text-slate-900 mb-2 truncate w-full pr-8">{evt.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{evt.location}</p>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{evt.description}</p>
                  </div>
                ))}
                {events.length === 0 && (
                  <div className="col-span-full py-12 text-center text-slate-500 border border-dashed border-slate-300 bg-white">
                    No active events. Add one above.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab !== 'Overview' && activeTab !== 'Gallery Manager' && activeTab !== 'Events Manager' && (
            <div className="bg-white border border-slate-200 p-12 text-center text-slate-500">
              <p className="text-sm">Module <strong className="text-slate-900 font-serif">{activeTab}</strong> is currently being developed according to the latest administrative directives.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
