// frontend/src/components/messages/MessageContainer.jsx
import "./styles/MessageContainer.css";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  // cleanup function (unmounts)
  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="md:min-h-[475px] max-h-fill flex flex-col max-[475px]:w-4/6 xs:w-4/6">
    {!selectedConversation ? <NoChatSelected /> :  
      <>
        {/* Header */}
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className="text-lg max-[475px]:text-[10px]">To:</span>{" "}
          <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    }
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-sm md:text-sm text-gray-200 font-semibold flex flex-col items-center gap-2  max-[475px]:self-baseline  max-[475px]:mt-[10vh] max-[475px]:text-[12px]">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
// STARTER CODE SNIPPET
// import Messages from "./Messages";
// import MessageInput from "./MessageInput";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         {/* Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>{" "}
//           <span className="text-gray-900 font-bold">John Doe</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;