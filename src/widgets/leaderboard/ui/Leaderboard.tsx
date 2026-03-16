import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useLeaderboard } from "../model";
import { LeaderRow } from "./LeaderRow";

export const Leaderboard: React.FC = () => {
  const { users, loading, loadMore } = useLeaderboard();

  const isItemLoaded = (index: number) => index < users.length;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={users.length + 1}
          loadMoreItems={loadMore}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={height}
              width={width}
              itemCount={users.length + 1}
              itemSize={100}
              onItemsRendered={onItemsRendered}
              ref={ref}
              itemData={{ users, loading }}
              overscanCount={5}
            >
              {LeaderRow}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};
