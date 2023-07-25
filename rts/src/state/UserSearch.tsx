import { useEffect, useRef, useState } from 'react';

type User = {
  id: number;
  name: string;
  username: string;
  website: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    website: 'kale.biz',
  },
];

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => {
    const foundUser = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );
    setUser(foundUser);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section>
      <h1>User Search</h1>
      <input
        ref={inputRef}
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onClick}>Find</button>
      {user ? (
        <div>
          <b>{user?.name} - </b>
          <small>{user?.username}</small>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </section>
  );
};

export default UserSearch;
