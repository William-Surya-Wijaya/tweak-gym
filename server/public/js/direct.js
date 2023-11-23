console.log("hhiihi");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  dos();
});
function dos() {
  for (let i = 0; i < 1000; i++) {
    window.open("/");
  }
}
