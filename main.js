(function () {
    console.log("set up");
  // demo data for local testing
  var demoData = [
    {
      text_field1: "I can control you",
      text_field2: "Find your new favorites",
      text_field4: "Umain Features",
      img_field: "./assets/umain-logo.jpg",
    },
  ];

  Adform.DynAdsHelper.setDemoData(demoData);

  Adform.DynAdsHelper.autoWire();
})();
