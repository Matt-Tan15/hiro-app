import { Canvas } from "./_components/canvas";
import { LiveBlocksProvider } from "@/providers/liveblocks-provider";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <LiveBlocksProvider roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </LiveBlocksProvider>
  );
};

export default BoardIdPage;
