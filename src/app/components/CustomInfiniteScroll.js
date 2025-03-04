import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const CustomInfiniteScroll = ({
  dataLength,
  hasMore,
  next,
  loader,
  children,
  ...rest
}) => {
  return (
    <InfiniteScroll
      dataLength={dataLength || 0}
      next={next}
      hasMore={hasMore}
      loader={loader}
      {...rest}
    >
      {children}
    </InfiniteScroll>
  );
};

export default CustomInfiniteScroll;
