$(document).ready(function ($) {
  // Init variables
  let active_tab = $("#hp-product-tabs-block .tab-nav-list").find(".active");
  let selected_tab = $("#hp-product-tabs-block .tab-nav-list").find(".tab-nav");

  // Action
  selected_tab.on("click", function () {
    updateUISelectedTab();
  });
  // Function
  function updateUISelectedTab() {
    active_tab.css({
      background: "#0B2743",
      color: "#ffffffff",
    });
  }
});
