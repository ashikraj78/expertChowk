import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelection() {
    const [selectedRole, setSelectedRole] = useState('Contractor');
    const navigate = useNavigate();

    const roles = [
        {
            id: 'Contractor',
            title: 'Contractor / Skilled Worker',
            icon: 'engineering', // Changed from chef_hat to engineering
        },
        {
            id: 'Architect',
            title: 'Architect / Designer',
            icon: 'architecture',
        },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
                <div className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start">
                    <button onClick={() => navigate(-1)} className="flex items-center justify-center">
                        <span className="material-symbols-outlined cursor-pointer">arrow_back_ios</span>
                    </button>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                    Role Selection
                </h2>
            </div>

            {/* Page Content Container */}
            <div className="flex flex-col flex-1 px-4 max-w-md mx-auto w-full">
                {/* Headline */}
                <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-8">
                    Who are you?
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-center text-base mb-8">
                    Select the role that best describes your work.
                </p>

                {/* Selection Cards */}
                <div className="flex flex-col gap-4">
                    {roles.map((role) => (
                        <div
                            key={role.id}
                            onClick={() => setSelectedRole(role.id)}
                            className="relative group cursor-pointer"
                        >
                            <div
                                className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all duration-200
                  ${selectedRole === role.id
                                        ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(19,182,236,0.3)]'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50'
                                    }`}
                            >
                                <div
                                    className={`rounded-full p-4 mb-4
                    ${selectedRole === role.id
                                            ? 'bg-primary text-background-dark'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[48px]">{role.icon}</span>
                                </div>
                                <p className="text-slate-900 dark:text-white text-xl font-bold text-center">
                                    {role.title}
                                </p>
                                {selectedRole === role.id && (
                                    <div className="absolute top-4 right-4">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Page Indicators */}
                <div className="flex w-full flex-row items-center justify-center gap-3 py-10 mt-auto">
                    <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <div className="h-2 w-5 rounded-full bg-primary"></div>
                    <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>

                {/* Sticky Bottom Action */}
                <div className="flex px-0 py-6 sticky bottom-0 bg-background-light dark:bg-background-dark p-4">
                    <button className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] shadow-lg active:scale-[0.98] transition-transform">
                        <span className="truncate">Next</span>
                    </button>
                </div>
            </div>
            {/* Extra space for bottom safe area */}
            <div className="h-6 bg-background-light dark:bg-background-dark"></div>
        </div>
    );
}
