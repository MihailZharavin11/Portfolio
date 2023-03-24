export const scrollToElement = (ref) => {
  if (ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
