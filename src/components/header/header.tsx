import styles from './header.module.css';

const Header = ({
  searchQuery,
  setSearchQuery,
  refreshUsers,
}: {
  searchQuery: string;
  setSearchQuery: any;
  refreshUsers: any;
}) => {
  return (
    <header className={styles.header}>
      <input
        className={styles.inputSearch}
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={styles.buttonRefresh} onClick={refreshUsers}>
        <p>Refresh Users</p>
      </button>
    </header>
  );
};

export default Header;
