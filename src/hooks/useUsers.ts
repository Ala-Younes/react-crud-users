import { useCallback, useState } from "react";
import { User } from "../types/User";
import { userService } from "../api/userService";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const controller = new AbortController();

    try {
      const data = await userService.getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }

    return () => controller.abort();
  }, []);

  return {
    users,
    fetchUsers,
  };
};

export default useUsers;
