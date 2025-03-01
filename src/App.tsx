import { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import { User } from "./types/User";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(VITE_API_URL);
      if (!response.ok) {
        throw new Error("Error fetching from api");
      }
      const data = await response.json();
      setUsers(data);
      return data;
    } catch (error) {
      error instanceof Error ? error : new Error("Unknown error occurred");
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchByEmail = (targetUser: User) => {
    return targetUser.name.toLowerCase().startsWith(searchTerm.toLowerCase());
  };

  const searchByName = (targetUser: User) => {
    return targetUser.email.toLowerCase().startsWith(searchTerm.toLowerCase());
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>User Directory</h1>
        <div>
          <button className="button-primary create-button">Add New User</button>
        </div>
      </header>

      <main className="app-content">
        <div className="search-container">
          <form className="user-search-form">
            <label htmlFor="search" className="search-label">
              Search Users
            </label>
            <input
              onChange={handleSearchUser}
              id="search"
              className="search-input"
              placeholder="Type to search users..."
              aria-label="Search users"
              type="text"
              value={searchTerm}
              name="search"
            />
          </form>
        </div>

        <ul className="user-list">
          {users.length > 0 &&
            users.map(
              (user) =>
                (searchByEmail(user) || searchByName(user)) && (
                  <li key={user.id} className="user-item">
                    <div className="user-info">
                      <h3 className="user-name">{user.name}</h3>
                      <p className="user-email">{user.email}</p>
                      <p className="user-phone">{user.phone}</p>
                      <div className="user-actions">
                        <button className="edit-button">Edit</button>
                        <button className="delete-button">Delete</button>
                      </div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </main>
    </div>
  );
}

export default App;
