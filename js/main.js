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

  // const animateList = document.querySelectorAll("#project01 ");
  let options = {
    rootMargin: "0px",
    threshold: 0.25
  };
  observer = new IntersectionObserver((elms) => {
    elms.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "intro") {
          dataContainer.classList.add("moveToRight");
          gear.classList.remove("fadeIn");
          gear.classList.remove("fadeOut");
          dataA.classList.remove("fadeOut");
          dataB.classList.remove("fadeIn");

        } else if (entry.target.id === "project01") {
          texto1.classList.add("fadeInLeft");
          labGuy.classList.add("fadeInRight");
          computer.classList.add("fadeInUp");
          dataContainer.classList.add("moveToLeft");
          dataContainer.classList.remove("moveToRight");
          dataA.classList.add("fadeOut");
          dataB.classList.add("fadeIn");
          dataA.classList.remove("fadeIn");
          dataB.classList.remove("fadeOut");
          dataC.classList.remove("fadeIn");
          dataC.classList.add("fadeOut");
          gear.classList.add("fadeIn");
          visuals.style.backgroundColor = "#F0F2F4";

        } else if (entry.target.id === "project02") {
          texto2.classList.add("fadeInLeft");
          server.classList.add("fadeIn");
          tube.classList.add("fadeInDown");
          labtalk.classList.add("fadeInRight");
          dataB.classList.add("fadeOut");
          dataC.classList.add("fadeIn");
          dataB.classList.remove("fadeIn");
          dataC.classList.remove("fadeOut");
          dataD.classList.remove("fadeIn");
          dataD.classList.add("fadeOut");

        } else if (entry.target.id === "project03") {
          texto3.classList.add("fadeInLeft");
          dataD.classList.add("fadeIn");
          dataC.classList.add("fadeOut");
          dataC.classList.remove("fadeIn");
          dataE.classList.remove("fadeIn");
          
        }else if (entry.target.id === "project04") {
          dataE.classList.add("fadeIn");
          dataD.classList.add("fadeOut");
          dataD.classList.remove("fadeIn");
          dataF.classList.remove("fadeIn");
        }
        else if (entry.target.id === "project05") {
          dataF.classList.add("fadeIn");
          dataE.classList.add("fadeOut");
          dataE.classList.remove("fadeIn");
        }
        else {
          texto1.classList.remove("fadeInLeft");
          texto2.classList.remove("fadeInLeft");
          labGuy.classList.remove("fadeInRight");
          computer.classList.remove("fadeInUp");
          dataContainer.classList.remove("moveToLeft");
          dataA.classList.remove("fadeOut");
          dataB.classList.remove("fadeIn");
          // dataD.classList.remove("fadeIn");
        }
        // entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
      } else {
        
        // console.log(
        //   "OFFFFF:",
        //   entry
        // )
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
  cssScrollSnapPolyfill();

  console.log("LOADED");
});
