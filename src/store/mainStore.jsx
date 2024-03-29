import { create } from "zustand";

const mainStore = create((set) => ({
  theme: "light",
  navOpen: false,
  scroll: "",
  talk: false,

  openTalk: () => {
    set({
      talk: true,
    });
  },
  closeTalk: () => {
    set({
      talk: false,
    });
  },
  darkMode: () => {
    set({
      theme: "dark",
    });
  },
  lightMode: () => {
    set({
      theme: "light",
    });
  },

  navToggle: () => {
    const { navOpen } = mainStore.getState();
    set({
      navOpen: !navOpen,
    });
  },
  navClose: () => {
    set({
      navOpen: false,
    });
  },

  scrollingDown: () => {
    set({
      scroll: "scrolling-down",
    });
  },
  scrollingUp: () => {
    set({
      scroll: "scrolling-up",
    });
  },
}));

export default mainStore;
