import { User } from "../types/User";

const API_URL = import.meta.env.VITE_API_URL;

export const userService = {
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw new Error("Could not retrieve users. Please try again later.");
    }
  },
};
