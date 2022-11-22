(function () {
  // demo data for local testing
  let demoData = [
    {
      text_field1: "I can control you",
      text_field2: "Find your new favorites",
      text_field4: "Umain Features",
      img_field: "./assets/umain-logo.jpg",
    },
  ];

  // test the dynamic banner locally
  Adform.DynAdsHelper.setDemoData(demoData);
  // autoWire method automatically pushes text and image values to the HTML elements
  Adform.DynAdsHelper.autoWire();

  window.addEventListener("load", (event) => {
    console.log("The page has fully loaded");

    let banner = document.getElementById('banner');
    let state = dhtml.getState();

    console.log("The current state is: " + state);

    clickTAGvalue = dhtml.getVar("clickTAG", "https://www.umain.com/"); //banner will receive clickTAG value - if not defined, banner will land to example.com
    landingpagetarget = dhtml.getVar("landingPageTarget", "_blank"); //landingPageTarget variable enables to change target from Adform system.

    banner.onclick = function() {
      window.open(clickTAGvalue, landingpagetarget); //when banner is clicked it will open new window directing to clickTAG value
    }
  });
})();
