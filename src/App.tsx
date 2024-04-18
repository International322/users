import './App.css';
import { User } from './types/type';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchUsers } from './api/api';
import Statistics from './components/statistics/statistics';
import UserList from './components/user-list/user-list';
import Header from './components/header/header';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadUsers = async () => {
    const newUsers = await fetchUsers();
    setUsers(newUsers);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = useCallback(
    (uuid: string) => {
      setUsers(users.filter((user: User) => user.login.uuid !== uuid));
    },
    [users]
  );

  const filteredUsers = useMemo(
    () =>
      users.filter((user: User) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        return (
          fullName.includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.phone.includes(searchQuery) ||
          user.email.includes(searchQuery) ||
          user.dob.date.includes(searchQuery) ||
          user.location.street.name.includes(searchQuery)
        );
      }),
    [users, searchQuery]
  );

  console.log(users);

  return (
    <div className="App">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} refreshUsers={loadUsers} />
      <div style={{ display: 'flex' }}>
        <UserList deleteUser={deleteUser} filteredUsers={filteredUsers} />
        <Statistics users={users} />
      </div>
    </div>
  );
}

export default App;
