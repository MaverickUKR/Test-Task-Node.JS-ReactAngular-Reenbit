import "./styles/Message.css"
const Message = () => {
  return (
    // <div className="mb-4">
    // <div className="flex items-center justify-start gap-2.5">
    //   <img
    //     className="w-8 h-8 rounded-full"
    //     src="https://avatar.iran.liara.run/public"
    //     alt="Jese image"
    //   />
    //   <div className="bg-blue-800 rounded-3xl flex flex-col w-full max-w-[320px] leading-1.5 text-white">
    //     <p className="text-sm font-normal py-2 text-white">
    //       {" "}
    //       Users will really appreciate the
    //       improvements.
    //     </p>
    //   </div>
    // </div>
    // <div className="flex mr-10">
    //     <span className="text-sm font-normal text-gray-200">11:46</span>
    // </div>
    // </div>
    <div className="chat-wrapper">

  <div className="mb-4">
    <div className="flex items-center justify-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://avatar.iran.liara.run/public"
        alt="Jese image"
      />
      <div className="bubble left">
        <p className="text-sm font-normal text-white">Users will really appreciate the improvements.</p>
      </div>
    </div>
    <div className="flex ml-10">
      <span className="text-sm font-normal text-gray-200">11:46</span>
    </div>
  </div>

  <div className="mb-4">
    <div className="flex items-center justify-end gap-2.5">
      <div className="bubble right">
        <p className="text-sm font-normal text-white">Thank you! {"That's"} helpful! 👍</p>
      </div>
    </div>
    <div className="flex justify-end mr-10">
      <span className="text-sm font-normal text-gray-200">11:47</span>
    </div>
  </div>
</div>

  );
};

export default Message;
