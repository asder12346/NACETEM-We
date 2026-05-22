import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Initiatives from './pages/Initiatives';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import CapacityBuilding from './pages/CapacityBuilding';
import PlaceholderPage from './pages/PlaceholderPage';
import { Login, AdminDashboard } from './pages/Admin';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="research" element={<PlaceholderPage title="Research" description="Our ongoing research initiatives." />} />
              <Route path="capacity-building" element={<CapacityBuilding />} />
              <Route path="gallery" element={<PlaceholderPage title="Gallery" description="Visual highlights from our events and programs." />} />
              <Route path="events" element={<PlaceholderPage title="Events" description="Upcoming and past events." />} />
              <Route path="psr-test" element={<PlaceholderPage title="PSR Test Portal" description="Public Service Rules Exam Preparation." />} />
              <Route path="initiatives" element={<Initiatives />} />
              <Route path="news" element={<News />} />
              <Route path="publications" element={<PlaceholderPage title="Publications" description="Research publications and policy briefs." />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<PlaceholderPage title="Page Not Found" description="The requested page could not be found." />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}
