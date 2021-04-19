$(document).ready(function () {
  const animateList = [...document.querySelectorAll("section")];

  const gear = document.getElementById("gearMain");

  const dataContainer = document.getElementById("dataContainer");
  const dataA = document.getElementById("data-A");
  const dataB = document.getElementById("data-B");
  const dataC = document.getElementById("data-C");
  const dataD = document.getElementById("data-D");
  const dataE = document.getElementById("data-E");
  const dataF = document.getElementById("data-F");

  const visuals = document.getElementById("visuals");
  const texto1 = document.getElementById("textColumn");
  const labGuy = document.getElementById("labGuy");
  const computer = document.getElementById("computer");

  const texto2 = document.getElementById("textColumn2");
  const server = document.getElementById("server");
  const tube = document.getElementById("tube");
  const labtalk = document.getElementById("labtalk");

  const texto3 = document.getElementById("textColumn3");
  const dataGraph = document.getElementById("dataGraph");
  const labguy_3_1 = document.getElementById("labguy_3_1");
  const tube_3 = document.getElementById("tube_3");
  const computer_3 = document.getElementById("computer_3");
  const labguy_3_2 = document.getElementById("labguy_3_2");

  const texto4 = document.getElementById("textColumn4");
  const tube_4 = document.getElementById("tube_4");
  const data_4 = document.getElementById("data_4");
  const dataGraph_4 = document.getElementById("dataGraph_4");
  const labguy_4 = document.getElementById("labguy_4");

  const texto5 = document.getElementById("textColumn5");
  const comp_5_1 = document.getElementById("comp_5_1");
  const comp_5_2 = document.getElementById("comp_5_2");
  const comp_5_3 = document.getElementById("comp_5_3");
  const center_5 = document.getElementById("center_5");

  // const animateList = document.querySelectorAll("#project01 ");
  const options = {
    rootMargin: "0px",
    threshold: 0.4
  };
  observer = new IntersectionObserver((elms) => {
    // let startLoad = true;
    elms.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "intro") {
          dataContainer.classList.add("moveToRight");
          dataContainer.classList.remove("moveToLeft");
          gear.classList.remove("fadeIn");
          gear.classList.remove("fadeOut");
          dataA.classList.remove("fadeOut");
        } else {
          dataContainer.classList.add("moveToLeft");
          dataContainer.classList.remove("moveToRight");
        }
        if (entry.target.id === "project01") {
          dataA.classList.add("fadeOut");
          dataA.classList.remove("fadeIn");
          dataB.classList.add("fadeIn");
          dataB.classList.remove("fadeOut");

          texto1.classList.add("fadeInLeft");
          labGuy.classList.add("fadeInRight");
          computer.classList.add("fadeInUp");
          gear.classList.add("fadeIn");
          visuals.style.backgroundColor = "#F0F2F4";
        } else {
          dataB.classList.remove("fadeIn");
          dataB.classList.add("fadeOut"); 

          texto1.classList.remove("fadeInLeft");
          texto2.classList.remove("fadeInLeft");
          labGuy.classList.remove("fadeInRight");
          computer.classList.remove("fadeInUp");
        }
        if (entry.target.id === "project02") {
          dataB.classList.add("fadeOut");
          dataB.classList.remove("fadeIn");
          dataC.classList.add("fadeIn");
          dataC.classList.remove("fadeOut");

          texto2.classList.add("fadeInLeft");
          server.classList.add("fadeIn");
          tube.classList.add("fadeInDown");
          labtalk.classList.add("fadeInRight");
        } else {
          dataC.classList.remove("fadeIn");
          dataC.classList.add("fadeOut");

          texto2.classList.remove("fadeInLeft");
          server.classList.remove("fadeIn");
          tube.classList.remove("fadeInDown");
          labtalk.classList.remove("fadeInRight");
        }
        if (entry.target.id === "project03") {
          dataC.classList.add("fadeOut");
          dataC.classList.remove("fadeIn");
          dataD.classList.add("fadeIn");
          dataD.classList.remove("fadeOut");

          texto3.classList.add("fadeInLeft");
          dataGraph.classList.add("fadeIn");
          tube_3.classList.add("fadeInRight");
          computer_3.classList.add("fadeInRight");
          labguy_3_1.classList.add("fadeInUp");
          labguy_3_2.classList.add("fadeInDown");
        } else {
          dataD.classList.remove("fadeIn");
          dataD.classList.add("fadeOut");

          texto3.classList.remove("fadeInLeft");
          dataGraph.classList.remove("fadeIn");
          tube_3.classList.remove("fadeInRight");
          computer_3.classList.remove("fadeInRight");
          labguy_3_1.classList.remove("fadeInUp");
          labguy_3_2.classList.remove("fadeInDown");
        }
        if (entry.target.id === "project04") {
          dataD.classList.add("fadeOut");
          dataD.classList.remove("fadeIn");
          dataE.classList.add("fadeIn");
          dataE.classList.remove("fadeOut");

          texto4.classList.add("fadeInLeft");
          tube_4.classList.add("fadeInRight");
          data_4.classList.add("fadeIn");
          dataGraph_4.classList.add("fadeIn");
          labguy_4.classList.add("fadeInLeft");
        } else {
          dataE.classList.remove("fadeIn");
          dataE.classList.add("fadeOut");

          texto4.classList.remove("fadeInLeft");
          tube_4.classList.remove("fadeInRight");
          data_4.classList.remove("fadeIn");
          dataGraph_4.classList.remove("fadeIn");
          labguy_4.classList.remove("fadeInLeft");
        }
        if (entry.target.id === "project05") {
          dataE.classList.add("fadeOut");
          dataE.classList.remove("fadeIn");
          dataF.classList.add("fadeIn");
          dataF.classList.remove("fadeOut");

          texto5.classList.add("fadeInLeft");
          comp_5_1.classList.add("fadeInDown");
          comp_5_2.classList.add("fadeInDownB");
          comp_5_3.classList.add("fadeInDownC");
          center_5.classList.add("fadeInRight");
        } else {
          dataF.classList.remove("fadeIn");
          dataF.classList.add("fadeOut");

          texto5.classList.remove("fadeInLeft");
          comp_5_1.classList.remove("fadeInDown");
          comp_5_2.classList.remove("fadeInDownB");
          comp_5_3.classList.remove("fadeInDownC");
          center_5.classList.remove("fadeInRight");
        }
      }
    });
  }, options);

  animateList.forEach((elms) => {
    observer.observe(elms);
  });

  // Init ScrollMagic
  // var controller = new ScrollMagic.Controller();

  // var pinIntroScene2 = new ScrollMagic.Scene({
  //   triggerElement: "#fText",
  //   //vertical position from 0 to 1
  //   triggerHook: 0.45
  // })
  //   .setPin("#gearMain")
  //   .addTo(controller);

  // var SceneLabGuy = new ScrollMagic.Scene({
  //   triggerElement: "#fText",
  //   duration: "47%",
  //   triggerHook: 0.9
  // })
  //   .setClassToggle("#labGuy", "fadeInRight") // add class to project01
  //   .addTo(controller);

  // var SceneComputer = new ScrollMagic.Scene({
  //   triggerElement: "#fText",
  //   duration: "47%",
  //   triggerHook: 0.9
  // })
  //   // .addIndicators()
  //   .setClassToggle("#computer", "fadeInUp") // add class to project01
  //   .addTo(controller);

  // var SceneText1 = new ScrollMagic.Scene({
  //   triggerElement: "#fText",
  //   triggerHook: 0.9,
  //   duration: "55%"
  // })
  //   .setClassToggle("#textColumn", "fadeInLeft") // add class to project01
  //   .addTo(controller);

  // var animateElem = document.getElementById("visuals");
  // var SceneVisuals = new ScrollMagic.Scene({
  //   triggerElement: ".project",
  //   triggerHook: 0.5
  // })
  //   .on("enter", function () {
  //     // trigger animation by changing inline style.
  //     animateElem.style.backgroundColor = "#F0F2F4";
  //   })
  //   .on("leave", function () {
  //     // reset style
  //     animateElem.style.backgroundColor = "#fff";
  //   }) // add indicators (requires plugin)
  //   .addTo(controller);

  // var SceneText2 = new ScrollMagic.Scene({
  //   triggerElement: "#fText2",
  //   triggerHook: 0.9,
  //   duration: "55%"
  // })
  //   .setClassToggle("#textColumn2", "fadeInLeft") // add class to project01
  //   .addTo(controller);

  // var SceneTube = new ScrollMagic.Scene({
  //   triggerElement: "#fText2",
  //   duration: "47%",
  //   triggerHook: 0.9
  // })

  //   .setClassToggle("#tube", "fadeInDown") // add class to project01
  //   .addTo(controller);

  // var SceneServer = new ScrollMagic.Scene({
  //   triggerElement: "#fText2",
  //   duration: "47%",
  //   triggerHook: 0.9
  // })

  //   .setClassToggle("#server", "fadeIn") // add class to project01
  //   .addTo(controller);

  // var SceneLabtalk = new ScrollMagic.Scene({
  //   triggerElement: "#fText2",
  //   duration: "47%",
  //   triggerHook: 0.9
  // })

  // $("#learnScroll").click(function () {
  //   document.getElementById("main").classList.remove('y-mandatory');
  //   // $("#main").removeClass("y-mandatory");
  //   console.log("object");
  //   $("html,body,#main")
  //     .animate(
  //       {
  //         scrollTop: $("#project01").offset().top
  //       },
  //       100
  //     )
  //     .promise()
  //     .then(() => {
  //       setTimeout(function () {
  //         document.getElementById("main").classList.add('y-mandatory');
  //         // $("#main").addClass("y-mandatory");
  //       }, 1000);

  //       // $("#main").addClass("y-mandatory")
  //     });
  // });

  // .setClassToggle("#labtalk", "fadeInRight") // add class to project01
  // .addTo(controller);
  //   $("#learnScroll").click(function () {

  //     $("html, body").animate(
  //       {
  //         scrollTop: $("#project01").offset().top
  //       },
  //       100
  //     );
  //   });
  let playing = false;
  const sound = new Howl({
    src: ["../audio/01_quality_assurance.wav"],
    onplay: function () {
      playing = true;
      console.log("PLAYING?", sound.pos());
    },
    onpause: function () {
      playing = false;
    },
    onend: function () {
      console.log("END");
      playing = false;
      sound.stop();
    }
  });
  playAudio = () => {
    playing ? sound.pause() : sound.play();

    // sound.play();
  };
  //
  cssScrollSnapPolyfill();

  console.log("LOADED");
});
