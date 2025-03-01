import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import Header from "./components/Header";
import UserSearch from "./components/UserSearch";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, fetchUsers } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearchUser = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="app-content">
        <UserSearch onSearch={handleSearchUser} searchTerm={searchTerm} />
        <UserList users={users} searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default App;
