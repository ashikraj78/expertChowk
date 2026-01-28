import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProfileStore from '../store/useProfileStore';

export default function AddPortfolioEntry() {
    const { addPortfolioEntry } = useProfileStore();
    const navigate = useNavigate();

    // Local state for the form until saved
    const [formData, setFormData] = useState({
        projectType: '',
        city: '',
        description: '',
        photos: [], // Placeholder for now
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Basic validation
        if (!formData.projectType || !formData.city) {
            alert('Please fill in required fields');
            return;
        }

        addPortfolioEntry({
            ...formData,
            id: Date.now(), // Generate a temp ID
            date: new Date().toISOString()
        });

        console.log('Saved Entry:', formData);
        navigate('/portfolio-gateway');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display items-center">
            <div className="relative w-full max-w-[480px] h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
                {/* Top Navigation Bar */}
                <header className="flex-none sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-4 justify-between h-16">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate('/portfolio-gateway')}
                            className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
                        >
                            <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">close</span>
                        </button>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Add Portfolio Entry</h2>
                </header>

                <main className="flex-1 overflow-y-auto pb-32 scrollbar-hide">
                    {/* Project Basics Section */}
                    <div className="px-4 py-6 space-y-6">
                        {/* Project Type Dropdown */}
                        <div className="flex flex-col gap-2">
                            <label className="flex flex-col w-full">
                                <p className="text-base font-semibold leading-normal pb-2 text-slate-700 dark:text-slate-200">Project Type</p>
                                <div className="relative">
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="form-input flex w-full appearance-none rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192d33] h-14 px-4 pr-10 text-lg font-normal"
                                    >
                                        <option disabled value="">Select project type</option>
                                        <option value="kitchen">Kitchen Remodel</option>
                                        <option value="roofing">Roofing & Siding</option>
                                        <option value="flooring">Flooring Installation</option>
                                        <option value="painting">Interior Painting</option>
                                        <option value="plumbing">Plumbing Work</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                                </div>
                            </label>
                        </div>

                        {/* City Input */}
                        <div className="flex flex-col gap-2">
                            <label className="flex flex-col w-full">
                                <p className="text-base font-semibold leading-normal pb-2 text-slate-700 dark:text-slate-200">City</p>
                                <input
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="form-input flex w-full rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192d33] h-14 px-4 text-lg font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    placeholder="e.g., Delhi"
                                    type="text"
                                />
                            </label>
                        </div>

                        {/* Upload Photos Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold leading-tight tracking-tight">Upload Photos</h3>
                                <span className="text-sm font-medium text-slate-500">3-5 recommended</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {/* Photo Slots */}
                                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center gap-1 group active:scale-95 transition-transform cursor-pointer">
                                    <span className="material-symbols-outlined text-primary text-3xl">add_a_photo</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Add Photo</span>
                                </div>
                                <div className="relative aspect-square">
                                    <div
                                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWVD2lt-cKNyc0GVEPQc9W4r3DiR6aOoEY9_pSYkvDXi4PJVpg-PWHviwoV8RmCqMIy4GUZ4E9v9wKi_3x79emZQC-jKv1Cku_MG4Br-gzkgiPl7zsqSo6CN02Ze6w6oo0Lrg_HMQIAVpmDxizDl7qQrsNJwZxxmf2y_KtuTab5EB5GxhplNIPsYCLHSe_WjyZ9maQg9NTrvRBQpOjokJcMyg6-lxR6FGbOIWHNjovy-uHmqvbm-OiRvfb-Lvhnr0xfdUPVSR7OH4")' }}
                                    ></div>
                                    <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                <div className="relative aspect-square">
                                    <div
                                        className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
                                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5gp8yOlFROFCmIZFWWeHQoEKnD1cQ6-DWaysVd1Um3emN2YRBD1MKnRFXvDiOqwx1_hJVw36GaQ4m9lOZQlYlvPi6QiJ85mRHIYxYmGaLch69Yl7se95qcsGEg6J4SLJEe_-gz6dC8Ti1aGED-5mOhEjQLG4maVGrMY2nFbRIF5KXsuXOZH_pX0XX2qVRSnhajMeKRiEbjiXnnI08EoQwHvMWneeX_rHz4jJ9HdcBrVyOjuDlNK0PEVO4i4oVkzRFyG1hzHH1Q6I")' }}
                                    ></div>
                                    <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center gap-1 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl">add</span>
                                </div>
                                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center gap-1 cursor-pointer">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl">add</span>
                                </div>
                            </div>
                        </div>

                        {/* Description with Voice-to-Text */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-semibold leading-normal text-slate-700 dark:text-slate-200">Describe your work</p>
                                <span className="text-xs text-primary font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">bolt</span> Easy Voice Entry
                                </span>
                            </div>
                            <div className="relative">
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="form-input flex w-full min-h-[160px] rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#192d33] p-4 text-lg font-normal placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                                    placeholder="Explain what you did on this project..."
                                ></textarea>
                                {/* Tap to Speak Button */}
                                <div className="absolute bottom-4 right-4 flex flex-col items-center gap-1">
                                    <button className="bg-primary w-14 h-14 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white active:scale-90 transition-all">
                                        <span className="material-symbols-outlined text-3xl">mic</span>
                                    </button>
                                    <span className="text-[10px] font-bold text-primary uppercase">Tap to Speak</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Bottom Action Button */}
                <footer className="absolute bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
                    <button
                        onClick={handleSave}
                        className="w-full bg-primary text-white text-lg font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        <span>Save Portfolio Entry</span>
                        <span className="material-symbols-outlined">check_circle</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
