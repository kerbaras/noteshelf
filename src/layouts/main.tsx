import { Fragment } from "react";
import { Sidebar } from "@/components/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode[];
  toolbar?: React.ReactNode;
}

const createBreadcrumb = (breadcrumb: React.ReactNode[]) => {
  return (
    <nav className="inline-flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 text-xs text-gray-500">
        {breadcrumb.map((item, index) => (
          <Fragment key={index}>
            <li>{item}</li>
            {index < breadcrumb.length - 1 && <li>/</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  breadcrumb,
  toolbar,
}) => (
  <main className="flex min-h-screen flex-row bg-gray-50 text-xs">
    <Sidebar />
    <div className="main flex flex-auto flex-col ml-72">
      <div className="topbar sticky flex flex-row w-auto h-11 pl-4 pr-4 border-b border-gray-300 justify-between items-center">
        {createBreadcrumb(breadcrumb || [])}
        <div className="tools flex flex-row space-x-3 text-xs">{toolbar}</div>
      </div>
      {children}
    </div>
  </main>
);
