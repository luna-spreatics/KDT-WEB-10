import React from 'react';
import UserProvider from './context/UserProvider';
import UserProfile from './component/UserProfile';

function App() {
  const MyContext = React.createContext('defaultValue');
  console.log(MyContext);
  return (
    <div className="App">
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
}

export default App;
