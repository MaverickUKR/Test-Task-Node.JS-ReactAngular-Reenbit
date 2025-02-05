import { useState } from "react"
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error('No such user found!')
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center max-w-sm mx-auto">   
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <input type="text" id="simple-search" className="pl-5 bg-gray-800 text-white text-sm rounded-3xl block w-full p-2.5 max-[475px]:py-[0.01rem] max-[475px]:text-[10px]" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}required />
      </div>
     <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 max-[475px]:p-[0.3rem]">
        <svg className="w-4 h-4 max-[475px]:w-2 max-[475px]:h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
     </button>
    </form>
  )
}

export default SearchInput

// STARTER CODE SNIPPET 
// const SearchInput = () => {
//   return (
//     <form className="flex items-center max-w-sm mx-auto">   
//       <label htmlFor="simple-search" className="sr-only">Search</label>
//       <div className="relative w-full">
//         {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
//             </svg>
//         </div> */}
//         <input type="text" id="simple-search" className="bg-gray-800 text-gray-900 text-sm rounded-3xl block w-full p-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search..." required />
//       </div>
//      <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//         </svg>
//         <span className="sr-only">Search</span>
//      </button>
//     </form>
//   )
// }

// export default SearchInput