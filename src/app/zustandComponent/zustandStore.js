import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const commentStore = create((set) => ({
  items: [
    { id: 1, name: "Item 1", totalLikes: 10, subtitle: "Subtitle for item 1" },
    { id: 2, name: "Item 2", totalLikes: 25, subtitle: "Subtitle for item 2" },
    { id: 3, name: "Item 3", totalLikes: 40, subtitle: "Subtitle for item 3" },
    { id: 4, name: "Item 4", totalLikes: 55, subtitle: "Subtitle for item 4" },
    { id: 5, name: "Item 5", totalLikes: 70, subtitle: "Subtitle for item 5" },
    { id: 6, name: "Item 6", totalLikes: 85, subtitle: "Subtitle for item 6" },
    { id: 7, name: "Item 7", totalLikes: 90, subtitle: "Subtitle for item 7" },
    { id: 8, name: "Item 8", totalLikes: 15, subtitle: "Subtitle for item 8" },
    { id: 9, name: "Item 9", totalLikes: 30, subtitle: "Subtitle for item 9" },
    {
      id: 10,
      name: "Item 10",
      totalLikes: 45,
      subtitle: "Subtitle for item 10",
    },
  ],

  increaseLikes: (id) =>
    set((state) => {
      const itemExists = state.items.some((item) => item.id === id);
      if (!itemExists) throw new Error(`Item with id ${id} not found`);

      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, totalLikes: item.totalLikes + 1 } : item
        ),
      };
    }),
}));
