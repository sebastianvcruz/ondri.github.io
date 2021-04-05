$(document).ready(function () {
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  var pinIntroScene2 = new ScrollMagic.Scene({
    triggerElement: "#fText",
    //vertical position from 0 to 1
    triggerHook: 0.45
  })
    .setPin("#gearMain")
    .addTo(controller);

  var SceneLabGuy = new ScrollMagic.Scene({
    triggerElement: "#fText",
    duration: "47%",
    triggerHook: 0.9
  })
    .setClassToggle("#labGuy", "fadeInRight") // add class to project01
    .addTo(controller);

  var SceneComputer = new ScrollMagic.Scene({
    triggerElement: "#fText",
    duration: "47%",
    triggerHook: 0.9
  })
    // .addIndicators()
    .setClassToggle("#computer", "fadeInUp") // add class to project01
    .addTo(controller);

  var SceneText1 = new ScrollMagic.Scene({
    triggerElement: "#fText",
    triggerHook: 0.9,
    duration: "55%"
  })
    .setClassToggle("#textColumn", "fadeInLeft") // add class to project01
    .addTo(controller);

  var animateElem = document.getElementById("visuals");
  var SceneVisuals = new ScrollMagic.Scene({
    triggerElement: ".project",
    triggerHook: 0.5
  })
    .on("enter", function () {
      // trigger animation by changing inline style.
      animateElem.style.backgroundColor = "#F0F2F4";
    })
    .on("leave", function () {
      // reset style
      animateElem.style.backgroundColor = "#fff";
    }) // add indicators (requires plugin)
    .addTo(controller);

  var SceneText2 = new ScrollMagic.Scene({
    triggerElement: "#fText2",
    triggerHook: 0.9,
    duration: "55%"
  })
    .setClassToggle("#textColumn2", "fadeInLeft") // add class to project01
    .addTo(controller);

  var SceneTube = new ScrollMagic.Scene({
    triggerElement: "#fText2",
    duration: "47%",
    triggerHook: 0.9
  })

    .setClassToggle("#tube", "fadeInDown") // add class to project01
    .addTo(controller);

  var SceneServer = new ScrollMagic.Scene({
    triggerElement: "#fText2",
    duration: "47%",
    triggerHook: 0.9
  })

    .setClassToggle("#server", "fadeIn") // add class to project01
    .addTo(controller);

  var SceneLabtalk = new ScrollMagic.Scene({
    triggerElement: "#fText2",
    duration: "47%",
    triggerHook: 0.9
  })

    .setClassToggle("#labtalk", "fadeInRight") // add class to project01
    .addTo(controller);
  $("#learnScroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#project01").offset().top
      },
      100
    );
  });
});
