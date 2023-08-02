import { create } from "zustand";
import { persist } from 'zustand/middleware';

let AppStore = (set) => ({
    dopen: true,
    rows:[],
    setRows:(rows) =>set((state) =>({rows:rows})),
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

const appStore = persist(AppStore, { name: 'my_app_store' });
export const useAppStore = create(appStore);
