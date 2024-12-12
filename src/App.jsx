import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import GeneratorPage from './pages/GeneratorPage';
import CheckPage from './pages/CheckPage';
import TipsPage from './pages/TipsPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AdvancedGeneratorPage from './pages/AdvancedGeneratorPage';
import BulkGeneratorPage from './pages/BulkGeneratorPage';
import PhishingSimulationPage from './pages/PhishingSimulationPage';
import TwoFactorAuthPage from './others/TwoFactorAuthPage';
import PasswordManagerGuidePage from './others/PasswordManagerGuidePage';
import SecurityNewsPage from './others/SecurityNewsPage';
import PasswordGamePage from './others/PasswordGamePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/generate' element={<GeneratorPage />} />
        <Route path='/check' element={<CheckPage />} />
        <Route path='/tips' element={<TipsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/advance-generate' element={<AdvancedGeneratorPage />} />
        <Route path='/bulk-generate' element={<BulkGeneratorPage />} />
        <Route path='/phishing-simulation' element={<PhishingSimulationPage />} />
        <Route path='/two-factor-education' element={<TwoFactorAuthPage />} />
        <Route path='/password-manager-guide' element={<PasswordManagerGuidePage />} />
        <Route path='/news' element={<SecurityNewsPage />} />
        <Route path='/password-game' element={<PasswordGamePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App