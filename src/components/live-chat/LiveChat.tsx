import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const LiveChat = () => {
  return (
    <>
      {/* Live Chat and Facebook Button */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 items-center z-40">
        {/* Facebook Logo Button */}
        <Link
          href="https://www.facebook.com/profile.php?id=61567409452110"
          target="_blank"
          aria-label="Visit Facebook Page"
          className="bg-blue-600 p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition duration-300"
        >
          <FaFacebook size={30} className="text-white" />
        </Link>
      </div>
    </>
  );
};

export default LiveChat;
