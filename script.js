function openTab(evt, tabName) {
  // 1. Hide all tab panels
  var tabContent = document.getElementsByClassName("tab-panel");
  for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
      tabContent[i].classList.remove("active-panel");
  }

  // 2. Remove "active" class from all buttons
  var tabLinks = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // 3. Show the current tab and add "active" class to the button
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active-panel");
  evt.currentTarget.className += " active";
}