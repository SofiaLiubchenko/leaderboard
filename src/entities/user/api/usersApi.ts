import { LOADING_TIME, MAX_USERS_NUMBER } from "@shared/config";

import { generateUsers, type User } from "../model";

const ALL_USERS = generateUsers(MAX_USERS_NUMBER);

export function fetchUsers(offset: number, limit: number): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_USERS.slice(offset, offset + limit));
    }, LOADING_TIME);
  });
}
