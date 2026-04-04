import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Index from './pages/Index';
import Courses from './pages/Courses';
import CourseDiscipline from './pages/CourseDiscipline';
import Payments from './pages/Payments';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:disciplineId" element={<CourseDiscipline />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
