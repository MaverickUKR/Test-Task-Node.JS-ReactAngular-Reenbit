// frontend/src/components/sidebar/Conversation.jsx
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"
import "./styles/Conversation.css"
// import Divider from "../sidebar/Divider"
const Conversation = ({conversation, lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
      `}
       onClick={() => setSelectedConversation(conversation)}>
      <div className="my-2 relative">
          <img className="w-10 h-10 rounded-full" src={conversation.profilePic} alt="user avatar" />
          <span className={`${isOnline ? "conv conv_active" : "conv conv_inactive"}`}></span>
       </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-xl"></span>
            </div>
        </div>
       </div>
      {!lastIdx && <hr className="h-0 border-t-0.5 border-gray-400" />}
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