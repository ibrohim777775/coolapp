const body = document.querySelector("body");
body.style.backgroundColor = "#f2f2f2";
window.addEventListener("DOMContentLoaded", () => {
  function recurcy(element) {
    element.childNodes.forEach((node) => {
      // console.log(node);
      if (node.nodeName === "#text") {
        return;
      } else {
        console.log(node);
        recurcy(node);
      }
    });
  }
  recurcy(body);
});
console.log("salomm");
