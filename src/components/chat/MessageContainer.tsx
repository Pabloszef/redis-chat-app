import React from 'react'
import ChatTopBar from "@/components/chat/ChatTopBar";
import MessageList from "@/components/chat/MessageList";
import ChatBottomBar from "@/components/chat/ChatBottomBar";

const MessageContainer = () => {
    return (
        <div className="flex flex-col justify-between size-full">
            <ChatTopBar />

            <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
                <MessageList />
                <ChatBottomBar />
            </div>
        </div>
    )
}
export default MessageContainer
