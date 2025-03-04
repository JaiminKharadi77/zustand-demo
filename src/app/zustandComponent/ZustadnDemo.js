import React, { memo, useMemo } from "react";

import { useStore, commentStore } from "./zustandStore";

function ZustadnDemo() {
  const { count, inc } = useStore();
  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={inc}>one up</button>
        <CardList />
      </div>
    </div>
  );
}

export default ZustadnDemo;

export const Card = ({ id, name, totalLikes, subtitle }) => {
  const increaseLikes = commentStore((state) => state.increaseLikes);

  console.log(name);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-64 text-center">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
      <p className="text-blue-500 font-semibold mt-4">❤️ {totalLikes} Likes</p>
      <button
        onClick={() => increaseLikes(id)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Like
      </button>
    </div>
  );
};

export const MemoizedCard = memo(Card);

const CardList = () => {
  const { items } = commentStore();

  return (
    <div className="flex flex-wrap gap-4 justify-center p-6">
      {items.map((item) => (
        <MemoizedCard key={item.id} {...item} />
      ))}
    </div>
  );
};
