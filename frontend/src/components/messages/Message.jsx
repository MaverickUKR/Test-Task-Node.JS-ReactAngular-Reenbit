import "./styles/Message.css";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "bubble left" : "bubble right";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const msgSendTime = fromMe ? "justify-start" : "justify-end mr-6";
  const userAvatar = fromMe ? "" : "flex-row-reverse";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <>
      <div className={`flex chat-wrapper mt-6 ${userAvatar}`}>
        <div className={`flex items-center ${msgSendTime}`}>
          <img
            className="max-w-8 max-h-8 rounded-full max-[475px]:w-5 max-[475px]:h-5"
            src={profilePic}
            alt="Profile image"
          />
        </div>
        <div className={`${chatClassName} ${shakeClass}`}>
          <div>
            <p className="text-sm max-[768px]:text-[0.7rem] max-[475px]:text-[0.5rem]/3 font-normal text-white">
              {message.message}
            </p>
          </div>
        </div>
      </div>
      <div className={`flex mt-3 ml-10 ${msgSendTime}0`}>
        <span className="min-[475px]:text-sm font-normal text-gray-200">
          {formattedTime}
        </span>
      </div>
    </>
  );
};

export default Message;

// import "./styles/Message.css";
// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";

// const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();

//   const fromMe = message.senderId === authUser._id;
//   const chatClassName = fromMe ? "bubble left" : "bubble right";
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-800"; // Добавил фон для других сообщений

//   return (
//     <div className="chat-wrapper">
//       <div className={`mb-4 ${chatClassName}`}>
//         <div className="flex items-center gap-2.5">
//           <img
//             className="w-8 h-8 rounded-full"
//             src={profilePic || "https://via.placeholder.com/150"}
//             alt="Profile"
//           />
//           <div className={`bubble ${bubbleBgColor} px-4 py-2 rounded-lg`}>
//             <p className="text-sm font-normal text-white">{message.message}</p>
//           </div>
//         </div>
//         <div className={`flex ${fromMe ? "justify-end mr-10" : "ml-10"}`}>
//           <span className="text-sm font-normal text-gray-200">{message.time || "11:46"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;

//   <div className="chat-wrapper">

// <div className={`mb-4 ${chatClassName}`}>
//   <div className="flex items-center justify-start gap-2.5">
//     <img
//       className="w-8 h-8 rounded-full"
//       src={profilePic}
//       alt="Jese image"
//     />
//     <div className={`${bubbleBgColor}`}>
//       <p className="text-sm font-normal text-white">{message.message}</p>
//     </div>
//   </div>
//   <div className="flex ml-10">
//     <span className="text-sm font-normal text-gray-200">11:46</span>
//   </div>
// </div>
