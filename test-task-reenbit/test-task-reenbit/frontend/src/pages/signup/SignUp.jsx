import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import "./SignUp.css";
import useSignup from "../../hooks/useSignup";
import { SpinnerDotted } from "spinners-react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  
  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="text-white mt-3">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="text-white bg-gray-800 w-full input h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-white mt-3">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="text-white bg-gray-800 w-full input h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-white mt-3">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="text-white bg-gray-800 w-full input h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-white mt-3">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="text-white bg-gray-800 w-full input h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link
            to={"/login"}
            className="flex text-gray-300 text-sm hover:underline hover:text-blue-600 mt-3"
          >
            Already have an account?
          </Link>

          <div>
            <button className="flex justify-center text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-3" disabled={loading}>
             {loading ? <SpinnerDotted size={20} thickness={100} speed={100} color="rgba(108, 122, 137, 1)" /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// STARTER CODE FOR SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox"
// import "./SignUp.css"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//        <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//         <div>
//           <label className="label">
//             <span className="text-white mt-3">Full Name</span>
//           </label>
//           <input type="text" placeholder="Enter full name" className="text-white bg-gray-800 w-full input h-10" />
//         </div>

//         <div>
//           <label className="label">
//             <span className="text-white mt-3">Username</span>
//           </label>
//           <input type="text" placeholder="Enter username" className="text-white bg-gray-800 w-full input h-10" />
//         </div>

//         <div>
//           <label className="label">
//             <span className="text-white mt-3">Password</span>
//           </label>
//           <input type="password" placeholder="Enter password" className="text-white bg-gray-800 w-full input h-10" />
//         </div>

//         <div>
//           <label className="label">
//             <span className="text-white mt-3">Confirm Password</span>
//           </label>
//           <input type="password" placeholder="Confirm password" className="text-white bg-gray-800 w-full input h-10" />
//         </div>

//         <GenderCheckbox />

//         <a href='#' className="flex text-gray-300 text-sm hover:underline hover:text-blue-600 mt-3">
//         Already have an account?
//         </a>

//         <div>
//         <button className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-3">Sign Up</button>
//        </div>
//         </form>
//      </div>
//     </div>
//   )
// }

// export default SignUp
