import { useNavigate } from 'react-router-dom';
import useProfileStore from '../store/useProfileStore';

export default function SkillSelection() {
    const { selectedSkills, toggleSkill } = useProfileStore();
    const navigate = useNavigate();

    const skills = [
        { id: 'carpenter', name: 'Carpenter', icon: 'handyman' },
        { id: 'electrician', name: 'Electrician', icon: 'electrical_services' },
        { id: 'plumber', name: 'Plumber', icon: 'plumbing' },
        { id: 'painter', name: 'Painter', icon: 'format_paint' },
        { id: 'pop', name: 'POP/False Ceiling', icon: 'architecture' },
        { id: 'mason', name: 'Mason', icon: 'foundation' },
        { id: 'tile', name: 'Tile Work', icon: 'grid_view' },
        { id: 'other', name: 'Other', icon: 'more_horiz' },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display items-center">
            <div className="relative w-full max-w-[480px] h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
                {/* Top Navigation Bar */}
                <header className="flex-none flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                    </button>
                    <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                        Skill Selection
                    </h2>
                </header>

                <main className="flex-1 flex flex-col overflow-y-auto px-4 pb-32 scrollbar-hide">
                    {/* Headline Section */}
                    <div className="pt-6 pb-2">
                        <h1 className="text-[32px] font-bold leading-tight tracking-tight">
                            What work do you do?
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
                            Select one or more skills to continue.
                        </p>
                    </div>

                    {/* Skill Grid */}
                    <div className="grid grid-cols-2 gap-4 py-6">
                        {skills.map((skill) => {
                            const isSelected = selectedSkills.includes(skill.id);
                            return (
                                <div
                                    key={skill.id}
                                    onClick={() => toggleSkill(skill.id)}
                                    className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 shadow-sm transition-all cursor-pointer
                  ${isSelected
                                            ? 'border-primary bg-primary/10' // Selected style (mimicking skill-card-selected)
                                            : 'border-transparent bg-white dark:bg-slate-800/50'
                                        }`}
                                >
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 text-primary">
                                            <span
                                                className="material-symbols-outlined text-xl"
                                                style={{ fontVariationSettings: "'FILL' 1" }}
                                            >
                                                check_circle
                                            </span>
                                        </div>
                                    )}
                                    <div
                                        className={`mb-4 p-4 rounded-full 
                    ${isSelected ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}
                                    >
                                        <span
                                            className="material-symbols-outlined text-4xl"
                                            style={{ fontVariationSettings: "'FILL' 1" }}
                                        >
                                            {skill.icon}
                                        </span>
                                    </div>
                                    <p className="text-base font-semibold text-center">{skill.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </main>

                {/* Bottom Sticky Button */}
                <footer className="absolute bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark p-4 pb-8 border-t border-slate-200 dark:border-slate-800">
                    <button
                        onClick={() => navigate('/profile-setup')}
                        className="w-full flex h-14 cursor-pointer items-center justify-center rounded-xl bg-primary text-background-dark text-lg font-bold leading-normal tracking-wide shadow-lg active:scale-[0.98] transition-transform"
                    >
                        <span>Next</span>
                        <span className="material-symbols-outlined ml-2">chevron_right</span>
                    </button>
                    {/* Home Indicator space for iOS */}
                    <div className="h-2"></div>
                </footer>
            </div>
        </div>
    );
}
