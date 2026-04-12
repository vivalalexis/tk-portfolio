import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TKPortfolio from './pages/tk-portfolio-home';
import TKWork from './pages/tk-portfolio-work';
import TKAbout from './pages/tk-portfolio-about';
import TKContact from './pages/tk-portfolio-contact';
import CaseStudyAnimalCrossing from './pages/tk-casestudy-animalcrossing';
import CaseStudyKeri from './pages/tk-casestudy-keri';
import CaseStudyWilkins from './pages/tk-casestudy-wilkins';
import CaseStudyCRM from './pages/tk-casestudy-crm';
import CaseStudyCokeMusic from './pages/tk-casestudy-cokemusic';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TKPortfolio />} />
        <Route path="/work" element={<TKWork />} />
        <Route path="/about" element={<TKAbout />} />
        <Route path="/contact" element={<TKContact />} />
        <Route path="/work/animal-crossing" element={<CaseStudyAnimalCrossing />} />
        <Route path="/work/keri-pulp-friction" element={<CaseStudyKeri />} />
        <Route path="/work/wilkins" element={<CaseStudyWilkins />} />
        <Route path="/work/crm-braze" element={<CaseStudyCRM />} />
        <Route path="/work/coke-music-promo" element={<CaseStudyCokeMusic />} />
      </Routes>
    </BrowserRouter>
  );
}
