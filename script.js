const btn = document.getElementById("generate-btn");
const img = document.getElementById("dog-image");

btn.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    img.src = data.message;
  } catch (error) {
    alert("Failed to fetch dog image!");
    console.error(error);
  }
});
