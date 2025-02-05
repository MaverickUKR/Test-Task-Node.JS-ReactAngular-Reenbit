import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { SpinnerDotted } from "spinners-react";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversations.length -1}/>
      ))}
      {loading ? (
        <SpinnerDotted
          size={20}
          thickness={100}
          speed={100}
          color="rgba(108, 122, 137, 1)"
        />
      ) : null}
    </div>
  );
};

export default Conversations;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation"
// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   )
// }

// export default Conversations
