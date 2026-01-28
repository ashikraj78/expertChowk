import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LanguageSelection from './pages/LanguageSelection';

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden font-display flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mobile Container */}
      <div className="relative z-10 w-full max-w-[480px] min-h-screen flex flex-col shadow-2xl bg-white">
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 overflow-y-auto">
          {/* Logo Animation Container */}
          <div className="mb-8 animate-fade-in-down">
            <div className="flex flex-col items-center gap-4 mb-4">
              {/* Logo Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full animate-pulse"></div>
                <div className="relative  p-4 rounded-2xl  hover:scale-110 transition-transform duration-300">
                  <img src="./logo_expertChowk.png" alt="logo" className="w-36 h-36" />
                </div>
              </div>

              {/* Brand Name */}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
                  Expert <span className="text-primary">Chowk</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg text-slate-700 text-center max-w-md mb-10 animate-fade-in leading-relaxed">
            Connecting skilled professionals.
            <span className="block mt-2 text-primary font-semibold">Build. Create. Transform.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full gap-4 mb-12 animate-fade-in-up">
            <Link
              to="/language-selection"
              className="group relative px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="flex gap-4 w-full animate-fade-in-up delay-200 mb-10">
            {[
              { icon: '🔨', title: 'Skilled Professionals', desc: 'Verified experts in construction, plumbing, electrical & more' },
              { icon: '⚡', title: 'Quick Matching', desc: 'Get connected with the right professional in minutes' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-primary/40 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col gap-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-slate-900 font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Stats */}
          <div className="flex justify-around w-full text-center animate-fade-in-up delay-300">
            <div className="px-4">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-slate-600 text-xs mt-1">Professionals</div>
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-slate-600 text-xs mt-1">Projects</div>
            </div>
            <div className="px-4">
              <div className="text-2xl font-bold text-primary">4.8★</div>
              <div className="text-slate-600 text-xs mt-1">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.5s both;
        }
        
        .delay-200 {
          animation-delay: 0.7s;
        }
        
        .delay-300 {
          animation-delay: 0.9s;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}

import RoleSelection from './pages/RoleSelection';
import OTPVerification from './pages/OTPVerification';
import SkillSelection from './pages/SkillSelection';
import ProfileSetup from './pages/ProfileSetup';
import ProfessionalDetails from './pages/ProfessionalDetails';
import PortfolioGateway from './pages/PortfolioGateway';
import AddPortfolioEntry from './pages/AddPortfolioEntry';
import ProfileUnderReview from './pages/ProfileUnderReview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/roleSelection" element={<RoleSelection />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/skill-selection" element={<SkillSelection />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/professional-details" element={<ProfessionalDetails />} />
        <Route path="/portfolio-gateway" element={<PortfolioGateway />} />
        <Route path="/add-portfolio-entry" element={<AddPortfolioEntry />} />
        <Route path="/profile-under-review" element={<ProfileUnderReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
