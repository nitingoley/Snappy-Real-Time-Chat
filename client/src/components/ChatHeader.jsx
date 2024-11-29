import React from "react";
import { X } from "lucide-react";
import { useAuthStore } from "../stores/useAuthStore";
import { useChatStore } from "../stores/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* avatar  */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* user info  */}
          <h3 className="font-medium">{selectedUser.fullName}</h3>
          <p className="text-sm text-base-content/70">
            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
          </p>
        </div>
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>

      {/* close btn  */}
    </div>
  );
};

export default ChatHeader;
