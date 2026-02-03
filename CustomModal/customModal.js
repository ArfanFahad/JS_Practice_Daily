function createModel(title, message) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "1000";

  const modalBox = document.createElement("div");
  modalBox.style.background = "#fff";
  modalBox.style.padding = "20px";
  modalBox.style.borderRadius = "10px";
  modalBox.style.width = "300px";
  modalBox.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
    <button id="closeModalBtn">Close</button>
    `;

  overlay.appendChild(modalBox);

  document.body.appendChild(overlay);

  overlay.querySelector("#closeModalBtn").addEventListener("click", () => {
    document.body.remove(overlay);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}

document.getElementById("openModalBtn").addEventListener("click", () => {
  createModel("Hello!", "This is a custom Modal");
});
