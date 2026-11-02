const dateForm = document.querySelector("#date-form");
const dateInput = document.querySelector("#anniversary-date");
const dateError = document.querySelector("#date-error");
const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  screens.forEach((screen) => screen.classList.remove("active"));
  document.querySelector(`#${screenId}`).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeDate(value) {
  return value.toLowerCase().trim().replace(/[.,]/g, "").replace(/\s+/g, " ");
}

dateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = normalizeDate(dateInput.value);
  const acceptedDates = [
    "november 3",
    "nov 3",
    "november 3rd",
    "nov 3rd",
    "11/3",
    "11-3",
  ];

  if (acceptedDates.includes(answer)) {
    dateError.textContent = "";
    dateInput.value = "";
    showScreen("home-screen");
  } else {
    dateError.textContent = "Almost, by. Try our special date again. ♡";
    dateInput.focus();
  }
});

document.querySelectorAll(".heart-card").forEach((card) => {
  card.addEventListener("click", () => showScreen(card.dataset.page));
});

document.querySelectorAll("[data-home]").forEach((button) => {
  button.addEventListener("click", () => {
    closePhotoViewer();
    showScreen("home-screen");
  });
});

// Create 60 animated memory cards. Replace images/memory-01.jpg etc. with your photos.
const memoryCloud = document.querySelector("#memory-cloud");
const photoViewer = document.querySelector("#photo-viewer");
const featuredPhoto = document.querySelector("#featured-photo");
const featuredCaption = document.querySelector("#featured-caption");
const returnPhotoButton = document.querySelector("#return-photo-button");
const photoCount = 66;

for (let i = 1; i <= photoCount; i++) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "memory-card";
  card.style.setProperty("--delay", `${(i % 17) * -0.7}s`);
  card.style.setProperty("--duration", `${14 + (i % 11)}s`);
  card.setAttribute("aria-label", `Open memory ${i}`);

  const number = String(i).padStart(2, "0");
  const image = document.createElement("img");
  image.src = `pictures/Our Pictures/picture-${i}.jfif`;
  image.alt = `Memory ${i}`;
  image.loading = "lazy";

  const placeholder = document.createElement("span");
  placeholder.className = "memory-card-placeholder";
  placeholder.innerHTML = `<span>♡</span><small>Memory ${number}</small>`;

  image.addEventListener("load", () => card.classList.add("has-photo"));
  image.addEventListener("error", () => {
    image.remove();
    card.classList.add("empty-photo");
  });

  card.append(image, placeholder);
  card.addEventListener("click", () => openPhotoViewer(card, number));
  memoryCloud.append(card);
}

function openPhotoViewer(card, number) {
  const image = card.querySelector("img");
  if (
    !image ||
    !image.getAttribute("src") ||
    !card.classList.contains("has-photo")
  ) {
    // Helpful preview fallback if the user has not added a photo to this slot yet.
    featuredPhoto.removeAttribute("src");
    featuredPhoto.classList.add("no-featured-photo");
    featuredCaption.textContent = `Memory ${number} is ready for your photo, By. ♡`;
  } else {
    featuredPhoto.src = image.src;
    featuredPhoto.alt = `Our memory ${number}`;
    featuredPhoto.classList.remove("no-featured-photo");
    featuredCaption.textContent = `One of my favorite little moments with you ♡`;
  }
  memoryCloud.classList.add("gallery-behind");
  photoViewer.classList.remove("hidden");
  photoViewer.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closePhotoViewer() {
  photoViewer.classList.add("hidden");
  memoryCloud.classList.remove("gallery-behind");
  featuredPhoto.removeAttribute("src");
  featuredPhoto.classList.remove("no-featured-photo");
}

returnPhotoButton.addEventListener("click", () => {
  closePhotoViewer();
  memoryCloud.scrollIntoView({ behavior: "smooth", block: "center" });
});
