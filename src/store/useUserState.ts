import { create } from 'zustand';
interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}
interface UserState {
  user: User;
  fetchUser: (id: number) => void;
}

export const useUserState = create<UserState>((set) => ({
  user: {},
  fetchUser: async (id) => {
    const path = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(path);
    set({ user: await response.json() });
  },
}));
