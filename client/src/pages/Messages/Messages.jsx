import Message from "../../components/Message/Message";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { useSelector } from "react-redux";
import Signin from "../Signin/Signin";

const Messages = () => {
    const { currentUser } = useSelector((state) => state.user);
  
    return (
      <>
        {!currentUser ? (
          <Signin />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="px-6">
              <LeftSidebar />
            </div>
            <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
              <Message />
            </div>
            <div className="px-6">
              <RightSidebar />
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Messages;
  