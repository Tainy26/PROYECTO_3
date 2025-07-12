export const linkPage = (selector, viewFunction) => {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      viewFunction();
    });
  }
};
