((DrawingSize, baseSize) => {
  let rem = baseSize * (window.innerHeight / DrawingSize);
  $("html").style.fontSize = `${rem}px`;

  window.$ = $;
  window.addEventListener(
    "resize",
    () => {
      rem = baseSize * (window.innerHeight / DrawingSize);
      rem = rem <= 60 ? 60 : rem;
      $("html").style.fontSize = `${rem}px`;
    },
    false
  );
  function $(tagName = null) {
    return tagName ? document.querySelector(tagName) : null;
  }
})(1080, 100);
