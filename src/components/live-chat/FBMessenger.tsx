// "use client";

// import { useState } from "react";
// import { CustomChat, FacebookProvider } from "react-facebook";
// import Link from "next/link";
// import { FaComments } from "react-icons/fa";

// const FBMessenger = () => {
//   // State to track if the chat is minimized or not
//   const [isMinimized, setIsMinimized] = useState(true);

//   const handleToggleChat = () => {
//     // Toggle the chat minimized state
//     setIsMinimized((prevState) => !prevState);
//   };

//   return (
//     <>
//       {/* Facebook Messenger Chat */}
//       <FacebookProvider appId="YOUR_APP_ID" chatSupport>
//         {" "}
//         {/* Replace YOUR_APP_ID */}
//         <CustomChat pageId="462664203595941" minimized={isMinimized} />{" "}
//         {/* Replace YOUR_PAGE_ID */}
//       </FacebookProvider>

//       {/* Live Chat Button */}
//       <div className="fixed bottom-4 right-4 bg-sky-500 bg-opacity-80 backdrop-blur-md px-4 py-2 text-sky-600 flex items-center space-x-2 rounded-full shadow-lg z-40">
//         <Link
//           href="#"
//           className="flex items-center space-x-2 hover:text-gray-300"
//           aria-label="Live Chat"
//           onClick={handleToggleChat} // Toggle chat visibility on click
//         >
//           <FaComments size={30} className="text-orange-500" />
//           <span className="text-lg font-semibold hidden md:inline text-white">
//             Live Chat
//           </span>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default FBMessenger;
