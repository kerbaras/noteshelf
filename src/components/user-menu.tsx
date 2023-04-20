import { Avatar, AvatarStatus } from "@/components/avatar";

export interface UserMenuProps {
  username: string;
  email: string;
  avatar: string;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  avatar,
  email,
  username,
}) => (
  <button className="flex flex-row items-center space-x-4">
    <Avatar status={AvatarStatus.online} size={8} src={avatar} alt={username} />
    <div className="flex flex-col text-start">
      <span className="name flex text-xs text-bold">{username}</span>
      <span className="email flex text-xs text-gray-500">{email}</span>
    </div>
  </button>
);
