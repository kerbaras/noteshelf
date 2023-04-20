export enum AvatarStatus {
  online = "online",
  offline = "offline",
  busy = "busy",
}

const statusClasses: Record<AvatarStatus, string> = {
  [AvatarStatus.online]: "bg-green-400",
  [AvatarStatus.offline]: "bg-gray-400",
  [AvatarStatus.busy]: "bg-red-400",
};

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  status?: AvatarStatus;
  className?: string;
}
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size,
  status,
  className,
}) => (
  <div className={`relative inline-flex ${className}`}>
    <img
      className={`w-${size || 8} h-${size || 8} overflow-hidden rounded-full`}
      src={src}
      alt={alt || ""}
    />
    {status && (
      <span
        className={`bottom-0 left-6 absolute w-3.5 h-3.5 ${statusClasses[status]} border-2 border-gray-100 rounded-full`}
      ></span>
    )}
  </div>
);

export interface AvatarGroupProps {
  more?: number;
  size?: number;
  children: React.ReactNode;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ more, children, size }) => (
  <div className="flex -space-x-4">
    {children}
    {more && (
      <a
        className={`relative flex items-center justify-center w-${size || 8} h-${size || 8} text-xs font-medium text-gray-700 border-2 bg-gray-200 border-white rounded-full hover:bg-gray-300`}
        href="#"
      >
        +{more}
      </a>
    )}
  </div>
);
