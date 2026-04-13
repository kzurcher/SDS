document.querySelectorAll("#year").forEach((yearNode) => {
  yearNode.textContent = new Date().getFullYear();
});
