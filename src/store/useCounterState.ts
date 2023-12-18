import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CounterState {
  count: number;
  inc: () => void;
  dec: () => void;
  reset: () => void;
}

export const useCounterState = create<CounterState>()(
  persist(
    (set) => ({
      count: 0,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter',
    }
  )
);
