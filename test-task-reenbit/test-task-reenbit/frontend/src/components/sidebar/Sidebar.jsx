import Conversations from "./Conversations"
import SearchInput from "./SearchInput"
import LogoutButton from "./LogoutButton"
import Divider from "./Divider"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <Divider />
      {/* <div className="divide-y divide-red-400 h-2.5"></div> */}
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations"
// import SearchInput from "./SearchInput"
// import LogoutButton from "./LogoutButton"

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       {/* <div className="divide-y divide-red-400 h-2.5"></div> */}
//       <Conversations />
//       <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar