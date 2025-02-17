import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>User Context Provider da bro</h1>
        <Login></Login>
        <Profile></Profile>
      </UserContextProvider>
    </>
  );
}

export default App;
