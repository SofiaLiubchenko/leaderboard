import { type User, UserRow } from "@entities/user";
import React from "react";

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: {
    users: User[];
    loading: boolean;
  };
}

export const LeaderRow = React.memo(({ index, style, data }: RowProps) => {
  const { users, loading } = data;
  const user = users[index];

  if (!user) {
    return <div style={style}>{loading ? "Loading..." : null}</div>;
  }

  return (
    <div
      style={style}
      className="flex w-full items-center gap-3 px-4 py-3 border-b border-gray-300 cursor-pointer overflow-hidden"
    >
      <UserRow position={index + 1} user={user} maxUsers={users.length} />
    </div>
  );
});
