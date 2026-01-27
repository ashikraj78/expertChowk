import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTPVerification() {
    const [step, setStep] = useState('phone'); // 'phone' | 'verify'
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const navigate = useNavigate();
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return; // Prevent multiple chars

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-advance
        if (value !== '' && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Handle backspace to move to previous input
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleGetOtp = () => {
        // In a real app, validate phone and send OTP here
        if (phoneNumber.length >= 10) {
            setStep('verify');
        }
    };

    const handleVerify = () => {
        // Verify OTP logic
        console.log('Verifying OTP:', otp.join(''));
        // Navigate to next page or dashboard
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col">
            {/* Main Container */}
            <div className="flex flex-col min-h-screen max-w-[480px] mx-auto w-full overflow-x-hidden">

                {/* Top App Bar */}
                <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
                    <div
                        onClick={() => step === 'verify' ? setStep('phone') : navigate(-1)}
                        className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-2xl">arrow_back</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
                        Verification
                    </h2>
                </div>

                <div className="flex-1 flex flex-col">
                    {step === 'phone' ? (
                        /* Step 1: Mobile Number Entry */
                        <section className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-2 pt-6">
                                Enter your mobile number
                            </h1>
                            <p className="text-gray-500 dark:text-[#92bbc9] text-base font-normal leading-normal pb-6 pt-1 px-4">
                                We'll send a code to verify it's you.
                            </p>
                            {/* Phone Input Field */}
                            <div className="flex flex-col gap-4 px-4 py-3">
                                <label className="flex flex-col w-full">
                                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Phone Number</p>
                                    <div className="flex gap-2">
                                        <div className="flex items-center justify-center px-4 rounded-lg border border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] h-14 text-slate-900 dark:text-white font-medium">
                                            +91
                                        </div>
                                        <input
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] focus:border-primary h-14 placeholder:text-gray-400 dark:placeholder:text-[#92bbc9] p-[15px] text-lg font-normal tracking-wider appearance-none"
                                            placeholder="00000 00000"
                                            type="tel"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </label>
                            </div>
                            {/* Primary Action Button (Step 1) */}
                            <div className="flex px-4 py-4">
                                <button
                                    onClick={handleGetOtp}
                                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 flex-1 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] shadow-lg active:scale-[0.98] transition-transform"
                                >
                                    <span className="truncate">Get OTP</span>
                                </button>
                            </div>
                        </section>
                    ) : (
                        /* Step 2: OTP Verification */
                        <>
                            <div className="h-10"></div>
                            <section className="flex flex-col bg-white/50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10 mt-4 pt-8 pb-10">
                                <h2 className="text-slate-900 dark:text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2">
                                    Verify your number
                                </h2>
                                <p className="text-gray-500 dark:text-[#92bbc9] text-sm font-normal leading-normal pb-6 pt-1 px-4">
                                    Enter the 4-digit code sent to +91 {phoneNumber}
                                </p>
                                {/* OTP Input Grid */}
                                <div className="flex justify-between px-4 gap-3 mb-8">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => inputRefs.current[index] = el}
                                            className="otp-input w-full h-16 rounded-lg border-2 border-slate-300 dark:border-[#325a67] bg-white dark:bg-[#192d33] text-slate-900 dark:text-white text-center text-2xl font-bold focus:border-primary focus:ring-0 appearance-none"
                                            maxLength={1}
                                            type="number"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                        />
                                    ))}
                                </div>
                                {/* Verify Button */}
                                <div className="flex px-4 py-2">
                                    <button
                                        onClick={handleVerify}
                                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 flex-1 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] shadow-lg active:scale-[0.98] transition-transform"
                                    >
                                        <span className="truncate">Verify & Continue</span>
                                    </button>
                                </div>
                                {/* Resend & Change Links */}
                                <div className="flex flex-col items-center gap-4 mt-6">
                                    <button className="text-primary text-base font-medium hover:underline flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">refresh</span>
                                        Resend OTP
                                    </button>
                                    <button
                                        onClick={() => setStep('phone')}
                                        className="text-gray-500 dark:text-[#92bbc9] text-sm font-normal hover:underline"
                                    >
                                        Change phone number
                                    </button>
                                </div>
                            </section>
                        </>
                    )}
                </div>

                {/* Visual Guidance Elements */}
                <div className="px-4 py-8 flex items-center justify-center gap-3 opacity-50">
                    <div className="size-2 rounded-full bg-primary"></div>
                    <div className="size-2 rounded-full bg-primary/30"></div>
                    <div className="size-2 rounded-full bg-primary/30"></div>
                    <div className="size-2 rounded-full bg-primary/30"></div>
                </div>
            </div>
        </div>
    );
}
