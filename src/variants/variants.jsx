export const Gamevariants = {
  visible: { opacity: 1, y: "0", transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: "100vh" },
  exit: { opacity: 1, y: "100vh", transition: { duration: 0.5 } },
};
export const homeVariants = {
  visible: { opacity: 1, y: "0", transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: "-100vh" },
  exit: { opacity: 0, y: "-100vh", transition: { duration: 0.5 } },
};
