import { Avatar, AvatarGroup } from "@/components/avatar";
import { WorkspaceLayout } from "@/layouts/workspace";
import {
  RiShareBoxLine,
  RiBookOpenLine,
  RiStarLine,
  RiMoreLine,
} from "react-icons/ri";

const Toolbar: React.FC = () => (
  <>
    <AvatarGroup more={4}>
      <Avatar src="/profile-picture-1.jpg" />
      <Avatar src="/profile-picture-2.jpg" />
      <Avatar src="/profile-picture-3.jpg" />
    </AvatarGroup>

    <button className="inline-flex rounded-md space-x-2 px-3 py-2 hover:bg-gray-100 items-center">
      <RiShareBoxLine className="text-[16px]" /> <span>Share</span>
    </button>
    <button className="inline-flex rounded-md space-x-2 px-3 py-2 hover:bg-gray-100 items-center">
      <RiBookOpenLine className="text-[16px] text-blue-400" />{" "}
      <span>Publish</span>
    </button>
    <button className="inline-flex rounded-md space-x-2 px-3 py-2 hover:bg-gray-100 items-center">
      <RiStarLine className="text-[16px] text-gray-400" />
    </button>
    <button className="inline-flex rounded-md space-x-2 px-3 py-2 hover:bg-gray-100 items-center">
      <RiMoreLine className="text-[16px] text-gray-400" />
    </button>
  </>
);

export default function Home() {
  return (
    <WorkspaceLayout
      breadcrumb={["My Space", "👋 Welcome", "Notebook"]}
      toolbar={<Toolbar />}
    >
      <section className="notebook flex flex-auto flex-col px-10 py-4">
        <div className="cells">
          <div className="cell px-4 py-3">
            <h1 className="text-3xl font-bold">👋 Welcome to your workspace</h1>
          </div>
          <div className="cell px-4 py-3">
            <p>This is an example notebook with some markdown and code</p>
          </div>
        </div>
      </section>
    </WorkspaceLayout>
  );
}
