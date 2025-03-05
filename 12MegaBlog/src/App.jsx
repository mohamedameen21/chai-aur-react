import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Shimmer from "./components/Shimmer";
import Header from "./components/Header/Header";
import Input from "./components/Input";
import { useRef } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? <Shimmer /> : (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full block">
          <Header/>
        </div>
        <main>
          {/* TODO: Outlet */}
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email"
            className="mt-4 text-white"
            ref={emailRef}
          ></Input>

          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter your password"
            className="mt-4 text-white"
            ref={passwordRef}
          ></Input>

          <button className="text-white" onClick={() => emailRef.current.focus()}>focus email</button>
          <button className="text-white" onClick={() => passwordRef.current.focus()}>focus password</button>
        </main>
        <footer>
          
        </footer>
      </div>
    </>
  );
}

export default App;
