"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

interface LiveBlocksProviderProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export const LiveBlocksProvider = ({
  children,
  roomId,
  fallback,
}: LiveBlocksProviderProps) => {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_p55qtU5bmZwkSLsqm3tI0VbVk0hZctqkdm4XZgRr-Sw8-_a01HIHkZfAJ5j2C26W"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
