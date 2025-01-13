import {BiLogOut} from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { SpinnerDotted } from "spinners-react";

const LogoutButton = () => {
  const {loading, logout}= useLogout();

  return (
    <div className="mt-auto">
    {!loading ? (
      <BiLogOut className="w-6 h-6 text-white cursor-pointer" 
      onClick={logout}
    />) : (<SpinnerDotted size={20} thickness={100} speed={100} color="rgba(108, 122, 137, 1)" />)
    }
    </div>
  )
}

export default LogoutButton
