import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Index from './pages/Index';
import Courses from './pages/Courses';
import CourseDiscipline from './pages/CourseDiscipline';
import Payments from './pages/Payments';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Admin from './pages/Admin';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:disciplineId" element={<CourseDiscipline />} />
        <Route path="/enroll" element={<Payments />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  );
}

export default App;
