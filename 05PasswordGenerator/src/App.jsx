import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  console.log('Re Redering happens');

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  async function copyToClipboard() {
    passwordRef?.current?.select();
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(password);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = password;
            
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
}

  const passwordGenerator = useCallback(() => {
    console.log('Executing password Generator function');
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#%^&*()?><";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="py-1 pb-4 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900">
        <h1 className="my-2 mt-5 text-center text-xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 items-center p-">
          <input
            placeholder="Password"
            className="text-lg px-5 py-3 text-white outline-none w-full "
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly
            ref={passwordRef}
          />
          <button onClick={async() => {await copyToClipboard()}} className="border border-amber-700 px-3 rounded-lg py-1 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex itmes-center gap-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>Length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
