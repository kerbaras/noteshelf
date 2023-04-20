import {
  RiFolder2Line,
  RiMenu2Line,
  RiSearch2Line,
  RiSettings2Line,
} from "react-icons/ri";
import { UserMenu } from "./user-menu";

export interface SidebarProps {}

interface Project {
  name: string;
  icon?: string;
}

const projects: Project[] = [
  { name: "Notebook", icon: "📓" },
  { name: "Work", icon: "💼" },
  { name: "My Space" },
  { name: "Welcome", icon: "👋" },
  { name: "Data Sience" },
];

const recent: Project[] = [
  { name: "Welcome", icon: "👋" },
  { name: "My Space" },
];

const ProjectEntry = ({ name, icon }: Project) => (
  <a
    href="#"
    className="flex items-center px-3.5 py-3.5 text-gray-400 hover:bg-gray-200"
  >
    {icon && <span className="mr-2">{icon}</span>}
    {!icon && <RiFolder2Line className="mr-2" />}
    <span>{name}</span>
  </a>
);

export const Sidebar: React.FC<SidebarProps> = ({}) => (
  <div className="sidebar flex flex-col w-72 h-screen fixed bg-gray-100 border-r border-gray-300">
    <div className="logo flex flex-row h-11 w-auto border-b border-gray-300 justify-between items-center p-2">
      <UserMenu
        username="Matias"
        email="matias.pierobonm@gmail.com"
        avatar="/profile-picture-1.jpg"
      />
      <button className="inline-flex itmes-center justify-center">
        <RiMenu2Line className="flex text-lg" />
      </button>
    </div>
    <button className="flex items-center px-3.5 py-2.5 text-gray-400 hover:bg-gray-200">
      <RiSearch2Line className="text-[16px] mr-2" />
      Search projects...
    </button>
    <a
      href="#"
      className="flex items-center px-3.5 py-3.5 text-gray-400 hover:bg-gray-200"
    >
      <RiSettings2Line className="text-[16px] mr-2" />
      Settings and Members
    </a>
    <hr className="border-gray-300" />
    <span className="flex items-center px-3.5 py-3.5 text-gray-400 font-bold">
      Recent Projects
    </span>
    {recent.map((project, key) => (
      <ProjectEntry key={key} {...project} />
    ))}
    <hr className="border-gray-300" />
    <span className="flex items-center px-3.5 py-3.5 text-gray-400 font-bold">
      Projects
    </span>
    {projects.map((project, key) => (
      <ProjectEntry key={key} {...project} />
    ))}
  </div>
);
