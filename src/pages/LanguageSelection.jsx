import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LanguageSelection() {
    const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
    const navigate = useNavigate();

    const languages = [
        { name: 'Hindi', native: 'हिन्दी', region: 'North India', icon: 'translate' },
        { name: 'Gujarati', native: 'ગુજરાતી', region: 'Gujarat', icon: 'public' },
        { name: 'Marathi', native: 'मराठी', region: 'Maharashtra', icon: 'g_translate' },
        { name: 'Tamil', native: 'தமிழ்', region: 'Tamil Nadu', icon: 'language_pinyin' },
        { name: 'Telugu', native: 'తెలుగు', region: 'Andhra & Telangana', icon: 'language_chinese_dayi' },
        { name: 'English', native: 'English', region: 'Standard English', icon: 'language' },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800">
                <div className="text-gray-800 dark:text-white flex size-12 shrink-0 items-center justify-center">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </div>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 font-display">
                    Language Selection / भाषा चयन
                </h2>
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col px-4 pt-6 pb-24 max-w-lg mx-auto w-full">
                {/* Header Text Section */}
                <div className="mb-8">
                    <h1 className="text-gray-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight text-center pb-2 font-display">
                        Choose your language
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-normal text-center font-display">
                        अपनी पसंदीदा भाषा चुनें
                    </p>
                </div>

                {/* Language List (Radio Group) */}
                <div className="flex flex-col gap-4 mb-8" style={{ '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(19,182,236)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')" }}>
                    {languages.map((lang) => (
                        <label
                            key={lang.name}
                            className={`flex items-center gap-4 rounded-xl border-2 border-solid p-5 cursor-pointer transition-all hover:border-primary/50
                ${selectedLanguage === lang.name
                                    ? 'border-primary bg-primary/5'
                                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50'
                                }`}
                        >
                            <input
                                type="radio"
                                name="language"
                                className="h-6 w-6 border-2 border-gray-300 dark:border-gray-700 bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-primary appearance-none rounded-full"
                                checked={selectedLanguage === lang.name}
                                onChange={() => setSelectedLanguage(lang.name)}
                            />
                            <div className="flex grow items-center justify-between">
                                <div>
                                    <p className="text-gray-900 dark:text-white text-lg font-semibold leading-none mb-1 font-display">
                                        {lang.name} {lang.native !== lang.name && `(${lang.native})`}
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                                        {lang.region}
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 dark:text-gray-600">
                                    {lang.icon}
                                </span>
                            </div>
                        </label>
                    ))}
                </div>
            </main>

            {/* Fixed Bottom Action Area */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-lg mx-auto w-full">
                    <button onClick={() => navigate('/roleSelection')} className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
                        <span className="truncate font-display uppercase tracking-wider">
                            Continue / आगे बढ़ें
                        </span>
                    </button>
                </div>
                {/* Safe area padding for mobile */}
                <div className="h-4"></div>
            </div>
        </div>
    );
}
