import { User } from "../types/User";
import { searchByEmail, searchByName } from "../utils/searchByEmailAndName";

type Props = {
  users: User[];
  searchTerm: string;
};

const UserList = ({ users, searchTerm }: Props) => {
  return (
    <ul className="user-list">
      {users.length > 0 &&
        users.map(
          (user) =>
            (searchByEmail(user, searchTerm) ||
              searchByName(user, searchTerm)) && (
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
  );
};

export default UserList;
