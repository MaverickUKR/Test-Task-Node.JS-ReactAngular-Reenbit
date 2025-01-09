import "./styles/Conversation.css"
// import Divider from "../sidebar/Divider"
const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="relative">
          <img className="w-10 h-10 rounded-full" src="https://avatar.iran.liara.run/public" alt="user avatar" />
          <span className="conv conv_active"></span>
       </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">John Doe</p>
                <span className="text-xl"></span>
            </div>
        </div>
       </div>
      {/* <Divider className="my-2" /> */}
    </>
  )
}

export default Conversation

// STARTER CODE SNIPPET
// import "./styles/Conversation.css"
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//       <div className="relative">
//           <img className="w-10 h-10 rounded-full" src="https://avatar.iran.liara.run/public" alt="user avatar" />
//           <span className="conv conv_active"></span>
//        </div>

//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">John Doe</p>
//                 <span className="text-xl"></span>
//             </div>
//         </div>
//        </div>
//       <div className="divider my-0 py-0 h-1"></div>
//     </>
//   )
// }

// export default Conversation