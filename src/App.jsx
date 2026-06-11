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
import CaseStudyCreations from './pages/tk-casestudy-creations';
import CaseStudyKWave from './pages/tk-casestudy-kwave';
import CaseStudyFrozen from './pages/tk-casestudy-frozen';
import CaseStudyDeliveroo12 from './pages/tk-casestudy-deliveroo12';
import CaseStudyLazadaMothersDay from './pages/tk-casestudy-lazada-mothersday';
import CaseStudyLazadaKPO from './pages/tk-casestudy-lazada-kpo';
import CaseStudyLazadaBirthday from './pages/tk-casestudy-lazada-birthday';
import CaseStudyPawcast from './pages/tk-casestudy-pawcast';
import CaseStudyAIReel from './pages/tk-casestudy-aireel';

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
        <Route path="/work/coca-cola-creations" element={<CaseStudyCreations />} />
        <Route path="/work/kwave-crisis" element={<CaseStudyKWave />} />
        <Route path="/work/coke-frozen" element={<CaseStudyFrozen />} />
        <Route path="/work/deliveroo-value-meals" element={<CaseStudyDeliveroo12 />} />
        <Route path="/work/lazada-mothers-day" element={<CaseStudyLazadaMothersDay />} />
        <Route path="/work/lazada-kpo" element={<CaseStudyLazadaKPO />} />
        <Route path="/work/lazada-birthday" element={<CaseStudyLazadaBirthday />} />
        <Route path="/work/pawcast" element={<CaseStudyPawcast />} />
        <Route path="/work/ai-show-trailer" element={<CaseStudyAIReel />} />
      </Routes>
    </BrowserRouter>
  );
}
