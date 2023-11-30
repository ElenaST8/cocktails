import "./app.css";
import Main from "./components/Main";
import { createContext, useState } from "react";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Main />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
