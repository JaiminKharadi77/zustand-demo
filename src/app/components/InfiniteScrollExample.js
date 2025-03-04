import React from "react";
import CustomInfiniteScroll from "./CustomInfiniteScroll";
import useFetchPosts from "./useFetchPosts";

const InfiniteScrollExample = () => {
  const { posts, hasMore, fetchPosts } = useFetchPosts(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Infinite Scrolling with API</h2>
      <CustomInfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading more posts...</h4>}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ padding: 20, border: "1px solid #ccc", margin: 10 }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </CustomInfiniteScroll>
    </div>
  );
};

export default InfiniteScrollExample;
