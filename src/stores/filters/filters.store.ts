import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { dateSelectedType } from '../../types/filters';


type salesOptionType = {
  PAYMENT_LINK: boolean;
  TERMINAL: boolean;
  VIEW_ALL: boolean;
};

type FilterState = {
  dateSelected: dateSelectedType;
  search: string;
  salesType: salesOptionType;
  setDateSelected: (selected: dateSelectedType) => void;
  setSalesType: (index: string, value: boolean) => void;
};

export const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      dateSelected: '',
      search: '',
      salesType: {
        PAYMENT_LINK: false,
        TERMINAL: false,
        VIEW_ALL: false,
      },
      setDateSelected: (selected: dateSelectedType) =>
        set({ dateSelected: selected }),
      setSalesType: (index: string, value: boolean) =>
        set((state) => ({ salesType: { ...state.salesType, [index]: value } })),
    }),
    { name: 'filter-store' }
  )
);
