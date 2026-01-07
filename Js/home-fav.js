// ===============================
// Favorites Function
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  let favList = JSON.parse(localStorage.getItem("favourites")) || [];

  document.querySelectorAll(".fav-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const card = icon.closest(".card");

      const product = {
        name: card.querySelector(".card-text")?.innerText || "Product",
        price: card
          .querySelector(".font-weight-bold.text-center")
          ?.innerText.replace("EGP", "")
          .trim(),
        img: card.querySelector("img")?.src,
      };

      const exists = favList.some((item) => item.name === product.name);

      if (!exists) {
        favList.push(product);
        localStorage.setItem("favourites", JSON.stringify(favList));

        Swal.fire({
          icon: "success",
          title: "Added to favourites",
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Already in favourites",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  });
});
