document.addEventListener("DOMContentLoaded", () => {
  const favContainer = document.getElementById("favContainer");
  let favList = JSON.parse(localStorage.getItem("favourites")) || [];

  function renderFavs() {
    favContainer.innerHTML = "";

    if (favList.length === 0) {
      favContainer.innerHTML =
        "<p class='m-auto text-muted'>No favourite products yet</p>";
      return;
    }

    favList.forEach((item, index) => {
      favContainer.innerHTML += `
        <div class="Fav-card col-md-12 d-flex justify-content-between align-items-center my-3">

          <div class="col-md-3">
            <img src="${item.img}" class="img-fluid" alt="${item.name}">
          </div>

          <div class="col-md-3">
            <h5>${item.name}</h5>
          </div>

          <div class="col-md-2">
            <h6 class="font-weight-bold">EGP ${item.price}</h6>
          </div>

          <div class="col-md-1">
            <h6 class="font-weight-bold text-success">In stock</h6>
          </div>

          <div class="col-md-3">
            <button class="remove-fav-btn btn btn-danger" data-index="${index}">
              Remove
            </button>
          </div>

        </div>
      `;
    });
      // remove fav items
    
    document.querySelectorAll(".remove-fav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index;
        favList.splice(index, 1);
        localStorage.setItem("favourites", JSON.stringify(favList));
        renderFavs();
      });
    });
  }

  renderFavs();
});
