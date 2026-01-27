import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSetup() {
    const [formData, setFormData] = useState({
        fullName: '',
        experience: '',
        city: '',
        radius: 25,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'radius' ? parseInt(value) : value,
        }));
    };

    const handleContinue = () => {
        // In a real app, save profile data here
        console.log('Profile Data:', formData);
        // Navigate to next step
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display antialiased text-slate-900 dark:text-white min-h-screen flex flex-col">
            <div className="max-w-[480px] mx-auto flex flex-col min-h-screen w-full">
                {/* Header / Progress Bar Section */}
                <header className="pt-6 pb-2">
                    <div className="flex flex-col gap-3 px-4">
                        <div className="flex gap-6 justify-between items-end">
                            <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Profile Setup</p>
                            <p className="text-primary text-sm font-bold leading-normal">Step 2 of 4</p>
                        </div>
                        <div className="rounded-full bg-slate-200 dark:bg-[#325a67] h-2.5 w-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </header>

                {/* Headline & Subtext */}
                <section>
                    <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 pb-1 pt-6 text-left">
                        Basic Info
                    </h1>
                    <p className="text-gray-500 dark:text-[#92bbc9] text-base font-normal leading-normal pb-6 px-4 text-left">
                        Let's get your profile ready for work.
                    </p>
                </section>

                {/* Form Content */}
                <main className="flex-grow flex flex-col gap-6 px-4">
                    {/* Full Name Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-white text-base font-medium leading-normal text-left">Full Name</label>
                        <div className="relative">
                            <input
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] h-16 px-4 text-lg font-normal placeholder:text-gray-400 dark:placeholder:text-[#92bbc9]"
                                placeholder="e.g. John Smith"
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Years of Experience Field (Large Dropdown) */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-white text-base font-medium leading-normal text-left">Years of Experience</label>
                        <div className="relative">
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="appearance-none w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] h-16 px-4 text-lg font-normal"
                            >
                                <option disabled value="">Select experience</option>
                                <option value="0-2">0 - 2 years</option>
                                <option value="3-5">3 - 5 years</option>
                                <option value="6-10">6 - 10 years</option>
                                <option value="10+">10+ years</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* City Field (Searchable) */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-900 dark:text-white text-base font-medium leading-normal text-left">Your City</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92bbc9]">location_on</span>
                            <input
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] h-16 pl-12 pr-4 text-lg font-normal placeholder:text-gray-400 dark:placeholder:text-[#92bbc9]"
                                placeholder="Search your city"
                                type="text"
                            />
                        </div>
                    </div>

                    {/* Service Radius Slider */}
                    <div className="flex flex-col gap-4 py-2">
                        <div className="flex justify-between items-center">
                            <label className="text-slate-900 dark:text-white text-base font-medium leading-normal">Work Radius</label>
                            <span className="text-primary font-bold text-lg">{formData.radius} km</span>
                        </div>
                        <div className="relative px-1">
                            <input
                                name="radius"
                                value={formData.radius}
                                onChange={handleChange}
                                className="w-full h-3 bg-slate-200 dark:bg-[#325a67] rounded-full appearance-none cursor-pointer accent-primary"
                                max="50"
                                min="10"
                                type="range"
                            />
                            <div className="flex justify-between mt-3 px-1 text-xs text-gray-400 dark:text-[#92bbc9] font-medium uppercase tracking-wider">
                                <span>10 km</span>
                                <span>30 km</span>
                                <span>50 km</span>
                            </div>
                        </div>
                        <p className="text-gray-500 dark:text-[#92bbc9] text-sm italic text-left">
                            "I can travel up to {formData.radius}km for jobs."
                        </p>
                    </div>
                </main>

                {/* Bottom Actions */}
                <footer className="p-4 mt-auto">
                    <button
                        onClick={handleContinue}
                        className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-xl py-5 rounded-xl transition-all shadow-lg active:scale-[0.98]"
                    >
                        Continue
                    </button>
                    <p className="text-center text-gray-500 dark:text-[#92bbc9] text-sm mt-4 pb-4">
                        You can change these settings later in your profile.
                    </p>
                </footer>
            </div>

            {/* Hidden visual spacing for layout consistency */}
            <div className="h-8"></div>
        </div>
    );
}
