import { useNavigate } from 'react-router-dom';
import useProfileStore from '../store/useProfileStore';

export default function ProfessionalDetails() {
    const { professionalDetails, setProfessionalDetails } = useProfileStore();
    const navigate = useNavigate();

    // Helper to update specific fields in professionalDetails
    const updateDetails = (field, value) => {
        setProfessionalDetails({ [field]: value });
    };

    const toggleProjectType = (type) => {
        const current = professionalDetails.projectTypes;
        const updated = current.includes(type)
            ? current.filter((t) => t !== type)
            : [...current, type];
        updateDetails('projectTypes', updated);
    };

    const toggleTool = (tool) => {
        const current = professionalDetails.tools;
        const updated = current.includes(tool)
            ? current.filter((t) => t !== tool)
            : [...current, tool];
        updateDetails('tools', updated);
    };

    const handleSaveAndContinue = () => {
        console.log('Professional Data:', professionalDetails);
        navigate('/portfolio-gateway');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display items-center">
            <div className="relative w-full max-w-[480px] h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
                {/* Top Navigation & Progress */}
                <header className="flex-none sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
                    <div className="flex items-center p-4 pb-2 justify-between">
                        <div
                            onClick={() => navigate(-1)}
                            className="text-primary flex size-10 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer"
                        >
                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Professional Details</h2>
                    </div>
                    {/* Progress Bar Component */}
                    <div className="flex flex-col gap-2 px-4 pb-4">
                        <div className="flex gap-6 justify-between items-end">
                            <p className="text-sm font-medium opacity-70">Registration Progress</p>
                            <p className="text-primary text-sm font-bold">Step 3 of 4</p>
                        </div>
                        <div className="rounded-full bg-slate-200 dark:bg-slate-800 h-2.5 overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: '75%' }}></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto pb-32 scrollbar-hide">
                    {/* Section: Types of Projects */}
                    <section className="mt-4">
                        <h3 className="text-lg font-bold leading-tight px-4 pb-3">Types of projects handled</h3>
                        <div className="grid grid-cols-2 gap-4 px-4">
                            {/* Residential Option */}
                            <button
                                onClick={() => toggleProjectType('Residential')}
                                className={`relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 p-6 transition-all active:scale-95
                    ${professionalDetails.projectTypes.includes('Residential')
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'}`}
                            >
                                <div className={`size-14 rounded-full flex items-center justify-center ${professionalDetails.projectTypes.includes('Residential') ? 'bg-primary/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                    <span className={`material-symbols-outlined text-3xl ${professionalDetails.projectTypes.includes('Residential') ? 'text-primary' : 'text-slate-400'}`}>home</span>
                                </div>
                                <span className="font-semibold text-base">Residential</span>
                                {professionalDetails.projectTypes.includes('Residential') && (
                                    <div className="absolute top-2 right-2 size-6 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-xs font-bold">check</span>
                                    </div>
                                )}
                            </button>
                            {/* Commercial Option */}
                            <button
                                onClick={() => toggleProjectType('Commercial')}
                                className={`relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 p-6 transition-all active:scale-95
                    ${professionalDetails.projectTypes.includes('Commercial')
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'}`}
                            >
                                <div className={`size-14 rounded-full flex items-center justify-center ${professionalDetails.projectTypes.includes('Commercial') ? 'bg-primary/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                                    <span className={`material-symbols-outlined text-3xl ${professionalDetails.projectTypes.includes('Commercial') ? 'text-primary' : 'text-slate-400'}`}>domain</span>
                                </div>
                                <span className="font-semibold text-base">Commercial</span>
                                {professionalDetails.projectTypes.includes('Commercial') && (
                                    <div className="absolute top-2 right-2 size-6 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-xs font-bold">check</span>
                                    </div>
                                )}
                            </button>
                        </div>
                    </section>

                    {/* Section: Team Size */}
                    <section className="mt-8">
                        <h3 className="text-lg font-bold leading-tight px-4 pb-3">Team Size</h3>
                        <div className="flex flex-col gap-3 px-4">
                            {/* Solo */}
                            <button
                                onClick={() => updateDetails('teamSize', 'Solo')}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all active:scale-[0.98]
                    ${professionalDetails.teamSize === 'Solo'
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 active:border-primary'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                    </div>
                                    <span className="font-medium text-base">Solo (Just me)</span>
                                </div>
                                <div className={`size-6 rounded-full flex items-center justify-center ${professionalDetails.teamSize === 'Solo' ? 'bg-primary' : 'border-2 border-slate-300 dark:border-slate-700'}`}>
                                    {professionalDetails.teamSize === 'Solo' && <div className="size-2.5 bg-white rounded-full"></div>}
                                </div>
                            </button>
                            {/* Small Team */}
                            <button
                                onClick={() => updateDetails('teamSize', 'Small')}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all active:scale-[0.98]
                    ${professionalDetails.teamSize === 'Small'
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 active:border-primary'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-2">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        <span className="material-symbols-outlined text-primary">person</span>
                                    </div>
                                    <span className="font-medium text-base">2 - 5 Workers</span>
                                </div>
                                <div className={`size-6 rounded-full flex items-center justify-center ${professionalDetails.teamSize === 'Small' ? 'bg-primary' : 'border-2 border-slate-300 dark:border-slate-700'}`}>
                                    {professionalDetails.teamSize === 'Small' && <div className="size-2.5 bg-white rounded-full"></div>}
                                </div>
                            </button>
                            {/* Large Crew */}
                            <button
                                onClick={() => updateDetails('teamSize', 'Large')}
                                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all active:scale-[0.98]
                    ${professionalDetails.teamSize === 'Large'
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 active:border-primary'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        <span className="material-symbols-outlined text-primary">group</span>
                                    </div>
                                    <span className="font-medium text-base">5+ Large Crew</span>
                                </div>
                                <div className={`size-6 rounded-full flex items-center justify-center ${professionalDetails.teamSize === 'Large' ? 'bg-primary' : 'border-2 border-slate-300 dark:border-slate-700'}`}>
                                    {professionalDetails.teamSize === 'Large' && <div className="size-2.5 bg-white rounded-full"></div>}
                                </div>
                            </button>
                        </div>
                    </section>

                    {/* Section: Tools Checklist */}
                    <section className="mt-8">
                        <h3 className="text-lg font-bold leading-tight px-4 pb-1">Tools & Equipment Owned</h3>
                        <p className="px-4 pb-4 text-sm opacity-60">Select all that apply to your business</p>
                        <div className="flex flex-col px-4 space-y-2">
                            {[
                                { id: 'Power Tools', label: 'Power Tools (Drills, Saws)', icon: 'construction' },
                                { id: 'Ladders & Scaffolding', label: 'Ladders & Scaffolding', icon: 'architecture' },
                                { id: 'Heavy Machinery', label: 'Heavy Machinery', icon: 'agriculture' },
                                { id: 'Hand Tools', label: 'Hand Tools', icon: 'hardware' },
                                { id: 'Safety Gear', label: 'Safety Gear (PPE)', icon: 'engineering' },
                            ].map((tool) => (
                                <label
                                    key={tool.id}
                                    className="flex items-center p-4 bg-white dark:bg-slate-900/50 rounded-xl cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        checked={professionalDetails.tools.includes(tool.id)}
                                        onChange={() => toggleTool(tool.id)}
                                        className="size-6 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary transition-all mr-4"
                                    />
                                    <span className="flex-1 text-base font-medium">{tool.label}</span>
                                    <span className="material-symbols-outlined opacity-30 group-hover:opacity-100">{tool.icon}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Visual Guidance Image */}
                    <div className="px-4 mt-8 mb-4">
                        <div
                            className="rounded-2xl h-48 bg-cover bg-center overflow-hidden flex items-end p-4"
                            style={{
                                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWTqYabx7tW02lRtZFWP5DRlTpNMOlANi3W0TxhJexqLu9rutGeiUkn6-8NBwYPkzAWVMrHjM0NP0Tqg3x8loOSG6gkiG2rbCv5a5NBJeE_AVVpRVpxXbW_MVgesmRBuwkVhnBsrdoR04w_kW8cLqswoWa589IVHBYQUblQw_ryzHvdoIGuoP1wl9VrOhClJvf0KbKC35UscbEJekJVT0MY5RRvzqZuNCCAYs2rxRxEn5-h23U_bShfsVCQrWapxKu9-9BpCYVQgI')"
                            }}
                        >
                            <div className="text-white">
                                <h4 className="font-bold text-lg">Verified Equipment</h4>
                                <p className="text-sm opacity-80">Better equipment leads to higher-paying contracts.</p>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Bottom Action Bar */}
                <footer className="absolute bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                    <button
                        onClick={handleSaveAndContinue}
                        className="w-full bg-primary py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                    >
                        Save and Continue
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="w-full py-2 text-slate-500 dark:text-slate-400 font-medium text-sm">
                        Skip for now
                    </button>
                </footer>
            </div>
        </div>
    );
}
