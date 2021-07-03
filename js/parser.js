window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let textNodes = [];

  function recurcy(element) {
    element.childNodes.forEach((node) => {
      // console.log(node);
      if (node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          content: node.textContent.trim(),
        };
        // console.log(node);
        textNodes.push(obj);
      } else {
        recurcy(node);
      }
    });
  }
  recurcy(body);
  // console.log(textNodes);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then((res) => res.json())
    .then((response) => console.log(response));
});
// console.log("salomm");
