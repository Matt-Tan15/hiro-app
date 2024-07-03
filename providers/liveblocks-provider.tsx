"use client";

import { LiveMap, LiveObject, LiveList } from "@liveblocks/client";
import { Layer } from "@/types/canvas";
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
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
      <RoomProvider
        id={roomId}
        initialPresence={{
          cursor: null,
          selection: [],
        }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}
      >
        <ClientSideSuspense fallback={fallback}>
          {() => children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
