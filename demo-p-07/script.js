console.log("script is running");

let about_btn = document.getElementById("about-btn");
let special_btn = document.getElementById("special-btn");
let insight_btn = document.getElementById("insight-btn");
let headerMenu = document.getElementById("header_menu");
let aboutSubLeft = document.getElementById("about-sub-left");
let aboutSubRight = document.getElementById("about-sub-right");
let specialSubLeft = document.getElementById("special-sub-left");
let specialSubRight = document.getElementById("special-sub-right");
let insightSubLeft = document.getElementById("insight-sub-left");
let insightSubRight = document.getElementById("insight-sub-right");

//
let aboutUs = document.getElementById("about-us-menu");
let special = document.getElementById("special-menu");
let insight = document.getElementById("insight-menu");

// console.log(insight)
// console.log(aboutUs)
// console.log(special)


// this function use for toggle enable class
function toggleEnableClass(element) {
  // Check if the element has the "invisible" class
  if (element.classList.contains("enabled")) {
    // If it has the class, remove it
    element.classList.remove("enabled");
  } else {
    // If it doesn't have the class, add it
    element.classList.add("enabled");
  }
}

// click function for about btn
about_btn.addEventListener("click", function () {
  // if function for headerMenu
  if (aboutSubLeft.classList.contains("fadeOutLeft")) {
    headerMenu.classList.add("animated");
  } else {
    headerMenu.classList.remove("animated");
  }

  // Enabled class toggled
  toggleEnableClass(aboutUs);
  special.classList.remove("enabled");
  insight.classList.remove("enabled");

  // alert("this is click")

  // if else condition for dropdown animation
  if (aboutSubLeft.classList.contains("fadeOutLeft")) {
    aboutSubLeft.classList.remove("fadeOutLeft");

    aboutSubLeft.classList.add("fadeInLeft");
  } else {
    aboutSubLeft.classList.remove("fadeInLeft");
    aboutSubLeft.classList.add("fadeOutLeft");
  }

  if (aboutSubRight.classList.contains("fadeOutRight")) {
    aboutSubRight.classList.remove("fadeOutRight");
    aboutSubRight.classList.add("fadeInRight");
  } else {
    aboutSubRight.classList.remove("fadeInRight");
    aboutSubRight.classList.add("fadeOutRight");
  }
});

// click function for specialism btn
special_btn.addEventListener("click", function () {
  // if function for headerMenu
  if (specialSubLeft.classList.contains("fadeOutLeft")) {
    headerMenu.classList.add("animated");
  } else {
    headerMenu.classList.remove("animated");
  }

  // Enabled class toggled
  toggleEnableClass(special);
  aboutUs.classList.remove("enabled");
  insight.classList.remove("enabled");

  // if else condition for dropdown animation
  if (specialSubLeft.classList.contains("fadeOutLeft")) {
    specialSubLeft.classList.remove("fadeOutLeft");

    specialSubLeft.classList.add("fadeInLeft");
  } else {
    specialSubLeft.classList.remove("fadeInLeft");
    specialSubLeft.classList.add("fadeOutLeft");
  }

  if (specialSubRight.classList.contains("fadeOutRight")) {
    specialSubRight.classList.remove("fadeOutRight");
    specialSubRight.classList.add("fadeInRight");
  } else {
    specialSubRight.classList.remove("fadeInRight");
    specialSubRight.classList.add("fadeOutRight");
  }
});

// click function for insight btn
insight_btn.addEventListener("click", function () {
  // if function for headerMenu
  if (insightSubLeft.classList.contains("fadeOutLeft")) {
    headerMenu.classList.add("animated");
  } else {
    headerMenu.classList.remove("animated");
  }

  // Enabled class toggled
  toggleEnableClass(insight);
  aboutUs.classList.remove("enabled");
  special.classList.remove("enabled");


  // if else condition for dropdown animation
  if (insightSubLeft.classList.contains("fadeOutLeft")) {
    insightSubLeft.classList.remove("fadeOutLeft");

    insightSubLeft.classList.add("fadeInLeft");
  } else {
    insightSubLeft.classList.remove("fadeInLeft");
    insightSubLeft.classList.add("fadeOutLeft");
  }

  if (insightSubRight.classList.contains("fadeOutRight")) {
    insightSubRight.classList.remove("fadeOutRight");
    insightSubRight.classList.add("fadeInRight");
  } else {
    insightSubRight.classList.remove("fadeInRight");
    insightSubRight.classList.add("fadeOutRight");
  }
});
