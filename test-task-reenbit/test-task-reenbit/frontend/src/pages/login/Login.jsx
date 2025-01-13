import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { SpinnerDotted } from "spinners-react";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
  e.preventDefault();
  await login(username, password)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="text-white mt-3">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="text-white bg-gray-800 w-full input h-10" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        
        <div>
          <label className="label">
            <span className="text-white mt-3">Password</span>
          </label>
          <input type="password" placeholder="Enter password" className="text-white bg-gray-800 w-full input h-10" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>    
        
        <Link to={'/signup'} className="flex text-gray-300 text-sm hover:underline hover:text-blue-600 mt-3">
          {"Don't"} have an account?
        </Link>
       
       <div>
        <button className="flex justify-center text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-3" disabled={loading}>{!loading ? ("Login") : (<SpinnerDotted size={20} thickness={100} speed={100} color="rgba(108, 122, 137, 1)" />)}</button>
       </div>
       </form>
       </div>
    </div>
  )
}

export default Login

// STARTER CODE FOR THIS FILE

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-white mt-3">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="text-white bg-gray-800 w-full input h-10" />
//         </div>
        
//         <div>
//           <label className="label">
//             <span className="text-white mt-3">Password</span>
//           </label>
//           <input type="password" placeholder="Enter password" className="text-white bg-gray-800 w-full input h-10" />
//         </div>    
        
//         <a href='#' className="flex text-gray-300 text-sm hover:underline hover:text-blue-600 mt-3">
//           {"Don't"} have an account?
//         </a>
       
//        <div>
//         <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-3">Login</button>
//        </div>
//        </form>
//        </div>
//     </div>
//   )
// }

// export default Login