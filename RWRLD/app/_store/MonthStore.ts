import { create } from 'zustand';
import { Months } from '../_data/MonthData';

interface MonthStore {
    month: Months,
    setMonth: (month: Months) => void
}

export const useMonthStore = create<MonthStore>((set) => ({
    month: 'January',
    setMonth: (month: Months) => set({ month })
}));