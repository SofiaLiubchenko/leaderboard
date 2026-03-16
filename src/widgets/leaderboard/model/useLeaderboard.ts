import { fetchUsers, type User } from "@entities/user";
import { LIMIT } from "@shared/config";
import { useCallback, useState } from "react";

export function useLeaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const loadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);

    const newUsers = await fetchUsers(page * LIMIT, LIMIT);

    setUsers((prev) => [...prev, ...newUsers]);
    setPage((prev) => prev + 1);

    setLoading(false);
  }, [loading, page]);

  return {
    users,
    loading,
    loadMore,
  };
}
