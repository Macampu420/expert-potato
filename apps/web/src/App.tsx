import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { authClient } from './lib/auth-client';

const signup = async () => {
  const { data } = await authClient.signUp.email(
    {
      email: "campuzanomiguel2208@gmai.com", // user email address
      password: "sapo123*", // user password -> min 8 characters by default
      name: "Miguel campuzano", // user display name
      image: "", // User image URL (optional)
      callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
    },
    {
      onSuccess: ctx => {
        console.log(ctx);
        console.log("User signed up successfully");
      },
      onError: ctx => {
        // display the error message
        alert(ctx.error.message);
      },
    }
  );

  console.log("data", data);
}
function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => signup()}>click here to sign up</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
