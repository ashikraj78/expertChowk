import { useNavigate } from 'react-router-dom';

export default function PortfolioGateway() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white min-h-screen flex flex-col">
            <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto">
                {/* TopAppBar */}
                <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
                    <div
                        onClick={() => navigate(-1)}
                        className="text-gray-800 dark:text-white flex size-12 shrink-0 items-center cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-3xl">chevron_left</span>
                    </div>
                    <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Portfolio Gateway</h2>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto pb-32">
                    {/* HeadlineText */}
                    <div className="px-4 pt-4">
                        <h2 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left">Show Your Best Work</h2>
                        <p className="text-gray-500 dark:text-[#92bbc9] text-sm mt-1">High-quality photos get you more jobs.</p>
                    </div>

                    {/* ProgressBar */}
                    <div className="flex flex-col gap-3 p-4 mt-2">
                        <div className="flex gap-6 justify-between">
                            <p className="text-gray-800 dark:text-white text-base font-medium leading-normal">Profile Completion</p>
                            <p className="text-primary text-sm font-bold leading-normal">75%</p>
                        </div>
                        <div className="rounded-full bg-gray-200 dark:bg-[#325a67] h-2.5 overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-gray-500 dark:text-[#92bbc9] text-sm font-normal leading-normal">Almost there! Just 3 projects to go live.</p>
                    </div>

                    {/* Empty States - Project Slots */}
                    <div className="flex flex-col gap-4 p-4">
                        {/* Slot 1 */}
                        <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-[#325a67] px-6 py-10 bg-white/50 dark:bg-[#162a31] transition-colors active:bg-gray-100 dark:active:bg-[#1c363f] cursor-pointer group">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                <span className="material-symbols-outlined text-4xl">add</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Add Project 1</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">Kitchen remodel, roofing, etc.</p>
                            </div>
                        </div>
                        {/* Slot 2 */}
                        <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-[#325a67] px-6 py-10 bg-white/50 dark:bg-[#162a31] transition-colors active:bg-gray-100 dark:active:bg-[#1c363f] cursor-pointer group">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                <span className="material-symbols-outlined text-4xl">add</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Add Project 2</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">Show your craftsmanship</p>
                            </div>
                        </div>
                        {/* Slot 3 */}
                        <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-[#325a67] px-6 py-10 bg-white/50 dark:bg-[#162a31] transition-colors active:bg-gray-100 dark:active:bg-[#1c363f] cursor-pointer group">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                                <span className="material-symbols-outlined text-4xl">add</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight">Add Project 3</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">Complete your portfolio</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Bottom Requirement & Action */}
                <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#111e22] border-t border-gray-200 dark:border-gray-800 p-4 pb-8">
                    <div className="flex items-start gap-3 mb-4 p-3 bg-blue-50 dark:bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary">info</span>
                        <p className="text-sm text-gray-700 dark:text-[#92bbc9] leading-tight">
                            <span className="font-bold text-gray-900 dark:text-white">Heads up!</span> 3 projects are required to go live and start receiving leads from clients.
                        </p>
                    </div>
                    <button
                        disabled
                        className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-bold py-4 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <span>Go Live</span>
                        <span className="material-symbols-outlined text-xl">rocket_launch</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
