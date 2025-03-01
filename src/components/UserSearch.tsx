type Props = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const UserSearch = ({ onSearch, searchTerm }: Props) => {
  return (
    <div className="search-container">
      <form className="user-search-form">
        <label htmlFor="search" className="search-label">
          Search Users
        </label>
        <input
          onChange={onSearch}
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
  );
};

export default UserSearch;
