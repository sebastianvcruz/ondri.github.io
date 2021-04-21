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
  const outlet = document.getElementById("outlet");
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
  const dataGraph_4 = document.getElementById("dataGraph_4");
  const labguy_4 = document.getElementById("labguy_4");

  const texto5 = document.getElementById("textColumn5");
  const comp_5_1 = document.getElementById("comp_5_1");
  const comp_5_2 = document.getElementById("comp_5_2");
  const comp_5_3 = document.getElementById("comp_5_3");
  const center_5 = document.getElementById("center_5");

  const playButton =  document.getElementById("playButton");
 
  
  const pauseButton =  document.getElementById("pauseButton");
  console.log("🚀 ~ file: main.js ~ line 47 ~ pauseButton", pauseButton)
  

  let playing1 = false;
  const sound1 = new Howl({
    src: ["../audio/Panel_1.mp3"],
    onplay: function () {
      playing1 = true;
      playButton.classList.add("invisible");
       pauseButton.classList.remove("invisible");
    },
    onpause: function () {
      playing1 = false;
      pauseButton.classList.add("invisible");
      playButton.classList.remove("invisible");
    },
    onend: function () {
      playing1 = false;
      pauseButton.classList.add("invisible");
      playButton.classList.remove("invisible");
    }
  });
  playAudio = () => {
    playing1 ? sound1.pause() : sound1.play();
  };

  soundControl =()=>{
     sound1.stop()
  }

  // const animateList = document.querySelectorAll("#project01 ");
  const options = {
    rootMargin: "0px",
    threshold: 0.45
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
          // playing1 ? sound1.stop() : null
          // playing1=false
          // pauseButton.classList.add("invisible");
          // playButton.classList.remove("invisible");
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
          outlet.classList.add("fadeInLeft");
          computer.classList.add("fadeInUp");
          gear.classList.add("fadeIn");
          visuals.style.backgroundColor = "#F0F2F4";
        } else {
          dataB.classList.remove("fadeIn");
          dataB.classList.add("fadeOut");

          texto1.classList.remove("fadeInLeft");
          texto2.classList.remove("fadeInLeft");
          labGuy.classList.remove("fadeInRight");
          outlet.classList.remove("fadeInLeft");
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
          dataGraph_4.classList.add("fadeIn");
          labguy_4.classList.add("fadeInLeft");
        } else {
          dataE.classList.remove("fadeIn");
          dataE.classList.add("fadeOut");

          texto4.classList.remove("fadeInLeft");
          tube_4.classList.remove("fadeInRight");
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
  //
  cssScrollSnapPolyfill();

  console.log("LOADED");
});
