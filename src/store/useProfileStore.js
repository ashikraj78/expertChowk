import { create } from 'zustand';

const useProfileStore = create((set) => ({
    // State
    selectedSkills: [],
    basicInfo: {
        fullName: '',
        experience: '',
        city: '',
        radius: 25,
    },
    professionalDetails: {
        projectTypes: ['Residential'],
        teamSize: 'Solo',
        tools: ['Power Tools', 'Ladders & Scaffolding', 'Hand Tools'],
    },
    portfolioEntries: [],

    // Actions
    toggleSkill: (skillId) => set((state) => {
        const isSelected = state.selectedSkills.includes(skillId);
        return {
            selectedSkills: isSelected
                ? state.selectedSkills.filter((id) => id !== skillId)
                : [...state.selectedSkills, skillId],
        };
    }),

    setBasicInfo: (info) => set((state) => ({
        basicInfo: { ...state.basicInfo, ...info },
    })),

    setProfessionalDetails: (details) => set((state) => ({
        professionalDetails: { ...state.professionalDetails, ...details },
    })),

    addPortfolioEntry: (entry) => set((state) => ({
        portfolioEntries: [...state.portfolioEntries, entry],
    })),

    // Reset/Clear if needed
    resetStore: () => set({
        selectedSkills: [],
        basicInfo: { fullName: '', experience: '', city: '', radius: 25 },
        professionalDetails: { projectTypes: ['Residential'], teamSize: 'Solo', tools: [] },
        portfolioEntries: [],
    })
}));

export default useProfileStore;
