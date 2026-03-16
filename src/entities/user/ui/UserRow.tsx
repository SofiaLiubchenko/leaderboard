import { useCallback, useState } from "react";

import { formatDuration } from "../lib";
import type { User } from "../model";
import { UserIcon } from "./UserIcon";

type UserProps = {
  position: number;
  user: User;
  maxUsers: number;
};

// function adds hidden zero characters to user position numbers so that user icons always create a vertical line
const formatPosition = (position: number, maxPosition: number) => {
  const maxLength = String(maxPosition).length;
  const str = String(position);
  const diff = maxLength - str.length;

  if (diff > 0) {
    const hiddenZeros = "0".repeat(diff);
    return (
      <span>
        {str}
        <span className="invisible">{hiddenZeros}</span>
      </span>
    );
  }

  return str;
};

export const UserRow = ({ position, user, maxUsers }: UserProps) => {
  const { color, name, time, speed } = user;
  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(() => setSelected((prev) => !prev), []);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-4 p-2 rounded cursor-pointer w-full transition-colors duration-300`}
    >
      <div
        className={`flex-shrink-0 text-right font-semibold transition-all duration-300 ${selected ? "text-purple-600" : "text-gray-900"}`}
      >
        {formatPosition(position, maxUsers)}
      </div>

      <div
        className={`flex-shrink-0 transition-all duration-300 border-4 rounded-full p-1 ${selected ? "border-purple-600" : "border-transparent"}`}
      >
        <UserIcon color={color} size={50} />
      </div>

      <div className="flex-1 min-w-0 flex flex-col items-start">
        <span className="font-semibold text-gray-900 truncate max-w-[85%]">
          {name}
        </span>

        <div className="text-sm flex gap-1">
          <span className="text-purple-600 font-medium">
            {formatDuration(time)}
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">{speed} км/ч</span>
        </div>
      </div>
    </div>
  );
};
