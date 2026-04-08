// DOM Elements
const selectTrigger = document.querySelector(".select-trigger");
const dropdown = document.querySelector(".dropdown");
const selectedOption = document.querySelector(".selected-option");
const searchInput = document.getElementById("searchInput");
const optionsContainer = document.querySelector(".options-container");
const options = document.querySelectorAll(".option");
const noResults = document.querySelector(".no-results");

// Toggle Dropdown
selectTrigger.addEventListener("click", function (e) {
  createRipple(e, this);
  toggleDropdown();
});

function toggleDropdown() {
  selectTrigger.classList.toggle("active");
  dropdown.classList.toggle("active");

  if (dropdown.classList.contains("active")) {
    searchInput.focus();
    resetAnimations();
  } else {
    searchInput.value = "";
    filterOptions("");
  }
}

// Reset animations when dropdown opens
function resetAnimations() {
  options.forEach((option) => {
    option.style.animation = "none";
    setTimeout(() => {
      option.style.animation = "";
    }, 10);
  });
}

// Option Selection
options.forEach((option) => {
  option.addEventListener("click", function (e) {
    createRipple(e, this);

    // Remove selected class from all options
    options.forEach((opt) => opt.classList.remove("selected"));

    // Add selected class to clicked option
    this.classList.add("selected");

    // Update selected option display
    const icon = this.getAttribute("data-icon");
    const text = this.querySelector("span").textContent;
    const iconColor = this.querySelector("i").style.color;

    selectedOption.innerHTML = `
                    <i class="fas ${icon}" style="color: ${iconColor};"></i>
                    <span>${text}</span>
                `;

    // Close dropdown
    setTimeout(() => {
      toggleDropdown();
    }, 300);
  });
});

// Live Search Functionality
searchInput.addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  filterOptions(searchTerm);
});

function filterOptions(searchTerm) {
  let visibleCount = 0;

  options.forEach((option) => {
    const text = option.querySelector("span").textContent.toLowerCase();

    if (text.includes(searchTerm)) {
      option.classList.remove("hidden");
      visibleCount++;
    } else {
      option.classList.add("hidden");
    }
  });

  // Show/hide no results message
  if (visibleCount === 0) {
    noResults.classList.add("show");
    optionsContainer.style.display = "none";
  } else {
    noResults.classList.remove("show");
    optionsContainer.style.display = "block";
  }
}

// Click Outside to Close
document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select")) {
    selectTrigger.classList.remove("active");
    dropdown.classList.remove("active");
    searchInput.value = "";
    filterOptions("");
  }
});

// Keyboard Support (ESC to close)
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && dropdown.classList.contains("active")) {
    toggleDropdown();
  }
});

// Ripple Effect Function
function createRipple(event, element) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Prevent dropdown close on search input click
searchInput.addEventListener("click", function (e) {
  e.stopPropagation();
});

// Touch Support for Mobile
let touchStartY = 0;
let touchEndY = 0;

dropdown.addEventListener(
  "touchstart",
  function (e) {
    touchStartY = e.changedTouches[0].screenY;
  },
  { passive: true }
);

dropdown.addEventListener(
  "touchend",
  function (e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  },
  { passive: true }
);

function handleSwipe() {
  if (touchEndY > touchStartY + 50) {
    // Swipe down detected - close dropdown
    if (optionsContainer.scrollTop === 0) {
      toggleDropdown();
    }
  }
}

// Add smooth scroll behavior
optionsContainer.addEventListener("wheel", function (e) {
  e.stopPropagation();
});

// Initial setup
window.addEventListener("load", function () {
  // Add entrance animation
  document.querySelector(".container").style.animation = "fadeIn 0.6s ease";
});

// Console Easter Egg
console.log(
  "%c Custom Select Menu",
  "font-size: 20px; font-weight: bold; color: #667eea;"
);
console.log(
  "%cCreated with ❤️ by Oathan Rex",
  "font-size: 14px; color: #764ba2;"
);
console.log(
  "%cFeatures: Glassmorphism | Live Search | Ripple Effects | Responsive Design",
  "font-size: 12px; color: #888;"
);