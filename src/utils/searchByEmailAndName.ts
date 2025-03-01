import { User } from "../types/User";

const searchByEmail = (targetUser: User, searchTerm: string) => {
  return targetUser.name.toLowerCase().startsWith(searchTerm.toLowerCase());
};

const searchByName = (targetUser: User, searchTerm: string) => {
  return targetUser.email.toLowerCase().startsWith(searchTerm.toLowerCase());
};

export { searchByEmail, searchByName };
