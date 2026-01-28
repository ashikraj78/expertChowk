import { useNavigate } from 'react-router-dom';

export default function ProfileUnderReview() {
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display items-center">
            <div className="relative w-full max-w-[480px] h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl border-x border-white/5">
                {/* TopAppBar */}
                <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between shrink-0">
                    <div
                        onClick={() => navigate(-1)}
                        className="text-primary flex size-12 shrink-0 items-center justify-center -ml-2 rounded-full hover:bg-primary/10 cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-[28px]">arrow_back_ios_new</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10 font-display">Verification Status</h2>
                </div>

                <div className="flex-1 overflow-y-auto pb-10 scrollbar-hide">
                    {/* HeaderImage / Illustration */}
                    <div className="@container">
                        <div className="@[480px]:px-4 @[480px]:py-3 px-4 py-6">
                            <div
                                className="w-full bg-center bg-no-repeat bg-contain flex flex-col justify-end overflow-hidden min-h-64 rounded-xl"
                                aria-label="Friendly illustration of person reviewing documents on a desk"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSkHxz324TYlXCjBKfPEfQh2sn-0W2MMUKr4xRqJJVkf9wn5eaCtX4-9wDMn8m8c-a9DtDViQ7UClJBkZmT82YkvBkl_j4qVofZYMdS8iVqhlyL5tpuJ_SDnjQd5l-KIZaZg42KHYRPaYa_fc8iQjgR6f2kpsAvv44zEKM56RynABsrBBi1bXLoec1HTVSM4to5-PpxDsbY439JQRa6zteC5ryw7rost6CcUs-8DLlf8_VVyXXGBYOp6x3yht3HN4FqVOo4CBx1m4")' }}
                            >
                            </div>
                        </div>
                    </div>

                    {/* HeadlineText */}
                    <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight px-6 text-center pb-3 pt-5 font-display">
                        Your profile is under review
                    </h2>

                    {/* BodyText */}
                    <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed pb-8 pt-1 px-8 text-center font-display">
                        Our team is currently verifying your documents to ensure a safe marketplace for everyone. Expected wait time: <span className="text-primary font-semibold">24–48 hours</span>.
                    </p>

                    {/* Timeline / Progress Stepper */}
                    <div className="mx-6 p-6 bg-white dark:bg-[#1a2b32] rounded-xl border border-slate-200 dark:border-white/5">
                        <div className="grid grid-cols-[40px_1fr] gap-x-3">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="text-emerald-500 bg-emerald-500/10 rounded-full p-1 flex items-center justify-center">
                                    <span
                                        className="material-symbols-outlined text-[24px]"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        check_circle
                                    </span>
                                </div>
                                <div className="w-[2px] bg-emerald-500/30 h-10 grow rounded-full"></div>
                            </div>
                            <div className="flex flex-1 flex-col pb-6">
                                <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal font-display">Profile Submitted</p>
                                <p className="text-emerald-500 text-sm font-medium leading-normal font-display uppercase tracking-wider">Completed</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="text-primary bg-primary/10 rounded-full p-1 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[24px]">pending</span>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal font-display">Admin Verification</p>
                                <p className="text-primary text-sm font-medium leading-normal font-display uppercase tracking-wider">In Progress</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="px-6 mt-10">
                        <button className="w-full py-4 border-2 border-primary/40 hover:border-primary/60 text-primary rounded-xl font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
                            <span className="material-symbols-outlined">help</span>
                            <span>Need help? Contact Support</span>
                        </button>
                        <p className="text-slate-500 dark:text-slate-400 text-xs text-center mt-4">
                            We'll send you a notification as soon as you're approved.
                        </p>
                    </div>
                    {/* Spacer for bottom safe area */}
                    <div className="h-8"></div>
                </div>
            </div>
        </div>
    );
}
