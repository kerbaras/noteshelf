import { MainLayout, MainLayoutProps } from "./main";

export interface WorkspaceLayoutProps extends MainLayoutProps {}

export const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({
  children,
  breadcrumb,
  toolbar,
}) => (
  <MainLayout breadcrumb={breadcrumb} toolbar={toolbar}>
    <div className="screen flex flex-row flex-auto">
      {children}
      <div className="sidebar flex flex-col w-72 h-full bg-gray-100 border-l border-gray-300">
        <nav className="tabs flex flex-row space-x-2 p-3.5 text-gray-400 border-b border-gray-300">
          <a href="#" className="inline-flex text-gray-600">
            Properties
          </a>
          <a href="#" className="inline-flex hover:text-gray-500">
            Comments
          </a>
          <a href="#" className="inline-flex hover:text-gray-500">
            Changes
          </a>
        </nav>
      </div>
    </div>
  </MainLayout>
);
