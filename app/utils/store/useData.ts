import { create } from 'zustand'

type Store = {
  data: any;
  query: string;
  setQuery: (query:string) => void;
  setData: (data:any) => void;
}

export const useData = create<Store>()((set) => ({
  data: [],
  query: 'javascript',
  setQuery: (query) => set(() => ({ query })),
  setData: (data) => set(() => ({ data })),
}))