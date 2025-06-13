document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".port-cont a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const imgSrc = this.getAttribute("href");

      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      lightbox.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      `;

      const img = document.createElement("img");
      img.src = imgSrc;
      img.style.maxWidth = "90%";
      img.style.maxHeight = "90%";
      img.style.border = "5px solid white";
      img.style.borderRadius = "10px";

      lightbox.appendChild(img);
      document.body.appendChild(lightbox);

      lightbox.addEventListener("click", () => {
        document.body.removeChild(lightbox);
      });
    });
  });
});
