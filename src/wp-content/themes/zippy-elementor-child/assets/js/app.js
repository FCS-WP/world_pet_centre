$(document).ready(function ($) {
  // Init variables
  let child_tab = $("#hp-product-tabs-block .tab-nav-list .tab-nav");
  let selected_first_tab = $("#hp-product-tabs-block .tab-nav-list").find(
    ".active"
  );
  // First Render
  selected_first_tab.css({
    background: "#0B2743",
    color: "#fff",
  });
  // Action
  child_tab.on("click", function (e) {
    e.preventDefault();
    child_tab.removeClass("on");
    $(this).addClass("on");
    updateUISelectedTab();
  });

  // Function
  function updateUISelectedTab() {
    child_tab.css({
      background: "#fff",
      color: "#0B2743",
    });

    let selected_tab = child_tab.filter(".on");

    selected_tab.css({
      background: "#0B2743",
      color: "#fff",
    });
  }
});
