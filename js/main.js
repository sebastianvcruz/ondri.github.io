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

  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const audioGraphNoPlay=document.getElementById("audioGraphNoPlay");
  const audioGraphPlay=document.getElementById("playAnimation");

  const playButton2 = document.getElementById("playButton2");
  const pauseButton2 = document.getElementById("pauseButton2");
  const audioGraphNoPlay2=document.getElementById("audioGraphNoPlay2");
  const audioGraphPlay2=document.getElementById("playAnimation2");

  const playButton3 = document.getElementById("playButton3");
  const pauseButton3 = document.getElementById("pauseButton3");
  const audioGraphNoPlay3=document.getElementById("audioGraphNoPlay3");
  const audioGraphPlay3=document.getElementById("playAnimation3");

  const playButton4 = document.getElementById("playButton4");
  const pauseButton4 = document.getElementById("pauseButton4");
  const audioGraphNoPlay4=document.getElementById("audioGraphNoPlay4");
  const audioGraphPlay4=document.getElementById("playAnimation4");


  const playButton5 = document.getElementById("playButton5");
  const pauseButton5 = document.getElementById("pauseButton5");
  const audioGraphNoPlay5=document.getElementById("audioGraphNoPlay5");
  const audioGraphPlay5=document.getElementById("playAnimation5");

  let playing1 = false;
  const sound1 = new Howl({
    src: ["../audio/Panel_1.mp3"],
    onplay: function () {
      playing1 = true;
      playButton.classList.add("invisible");
      audioGraphNoPlay.classList.add("invisible");
      pauseButton.classList.remove("invisible");
      audioGraphPlay.classList.remove("invisible");
    },
    onpause: function () {
      playing1 = false;
      pauseButton.classList.add("invisible");
      audioGraphPlay.classList.add("invisible");
      playButton.classList.remove("invisible");
      audioGraphNoPlay.classList.remove("invisible");
    },
    onend: function () {
      playing1 = false;
      pauseButton.classList.add("invisible");
      audioGraphPlay.classList.add("invisible");
      playButton.classList.remove("invisible");
      audioGraphNoPlay.classList.remove("invisible");
    }
  });
  playAudio = () => {
    playing1 ? sound1.pause() : sound1.play();
  };
  sound1Stop = () => {
    sound1.stop();
    playing1 = false;
    pauseButton.classList.add("invisible");
    audioGraphPlay.classList.add("invisible");
    playButton.classList.remove("invisible");
    audioGraphNoPlay.classList.remove("invisible");
  };

  let playing2 = false;
  const sound2 = new Howl({
    src: ["../audio/Panel_2.mp3"],
    onplay: function () {
      playing2 = true;
      playButton2.classList.add("invisible");
      audioGraphNoPlay2.classList.add("invisible");
      pauseButton2.classList.remove("invisible");
      audioGraphPlay2.classList.remove("invisible");
    },
    onpause: function () {
      playing2 = false;
      pauseButton2.classList.add("invisible");
      audioGraphPlay2.classList.add("invisible");
      playButton2.classList.remove("invisible");
      audioGraphNoPlay2.classList.remove("invisible");
    },
    onend: function () {
      playing2 = false;
      pauseButton2.classList.add("invisible");
      audioGraphPlay2.classList.add("invisible");
      playButton2.classList.remove("invisible");
      audioGraphNoPlay2.classList.remove("invisible");
    }
  });
  playAudio2 = () => {
    playing2 ? sound2.pause() : sound2.play();
  };
  sound2Stop = () => {
    sound2.stop();
    playing2 = false;
    pauseButton2.classList.add("invisible");
    audioGraphPlay2.classList.add("invisible");
    playButton2.classList.remove("invisible");
    audioGraphNoPlay2.classList.remove("invisible");
  };

  let playing3 = false;
  const sound3 = new Howl({
    src: ["../audio/Panel_3.mp3"],
    onplay: function () {
      playing3 = true;
      playButton3.classList.add("invisible");
      audioGraphNoPlay3.classList.add("invisible");
      pauseButton3.classList.remove("invisible");
      audioGraphPlay3.classList.remove("invisible");
    },
    onpause: function () {
      playing3 = false;
      pauseButton3.classList.add("invisible");
      audioGraphPlay3.classList.add("invisible");
      playButton3.classList.remove("invisible");
      audioGraphNoPlay3.classList.remove("invisible");
    },
    onend: function () {
      playing3 = false;
      pauseButton3.classList.add("invisible");
      audioGraphPlay3.classList.add("invisible");
      playButton3.classList.remove("invisible");
      audioGraphNoPlay3.classList.remove("invisible");
    }
  });
  playAudio3 = () => {
    playing3 ? sound3.pause() : sound3.play();
  };
  sound3Stop = () => {
    sound3.stop();
    playing3 = false;
    pauseButton3.classList.add("invisible");
    audioGraphPlay3.classList.add("invisible");
    playButton3.classList.remove("invisible");
    audioGraphNoPlay3.classList.remove("invisible");
  };


  let playing4 = false;
  const sound4 = new Howl({
    src: ["../audio/Panel_4.mp3"],
    onplay: function () {
      playing4 = true;
      playButton4.classList.add("invisible");
      audioGraphNoPlay4.classList.add("invisible");
      pauseButton4.classList.remove("invisible");
      audioGraphPlay4.classList.remove("invisible");
    },
    onpause: function () {
      playing4 = false;
      pauseButton4.classList.add("invisible");
      audioGraphPlay4.classList.add("invisible");
      playButton4.classList.remove("invisible");
      audioGraphNoPlay4.classList.remove("invisible");
    },
    onend: function () {
      playing4 = false;
      pauseButton4.classList.add("invisible");
      audioGraphPlay4.classList.add("invisible");
      playButton4.classList.remove("invisible");
      audioGraphNoPlay4.classList.remove("invisible");
    }
  });
  playAudio4 = () => {
    playing4 ? sound4.pause() : sound4.play();
  };
  sound4Stop = () => {
    sound4.stop();
    playing4 = false;
    pauseButton4.classList.add("invisible");
    audioGraphPlay4.classList.add("invisible");
    playButton4.classList.remove("invisible");
    audioGraphNoPlay4.classList.remove("invisible");
  };

  let playing5 = false;
  const sound5 = new Howl({
    src: ["../audio/Panel_5.mp3"],
    onplay: function () {
      playing5 = true;
      playButton5.classList.add("invisible");
      audioGraphNoPlay5.classList.add("invisible");
      pauseButton5.classList.remove("invisible");
      audioGraphPlay5.classList.remove("invisible");
    },
    onpause: function () {
      playing5 = false;
      pauseButton5.classList.add("invisible");
      audioGraphPlay5.classList.add("invisible");
      playButton5.classList.remove("invisible");
      audioGraphNoPlay5.classList.remove("invisible");
    },
    onend: function () {
      playing5 = false;
      pauseButton5.classList.add("invisible");
      audioGraphPlay5.classList.add("invisible");
      playButton5.classList.remove("invisible");
      audioGraphNoPlay5.classList.remove("invisible");
    }
  });
  playAudio5 = () => {
    playing5 ? sound5.pause() : sound5.play();
  };
  sound5Stop = () => {
    sound5.stop();
    playing5 = false;
    pauseButton5.classList.add("invisible");
    audioGraphPlay5.classList.add("invisible");
    playButton5.classList.remove("invisible");
    audioGraphNoPlay5.classList.remove("invisible");
  };

  // const animateList = document.querySelectorAll("#project01 ");
  const options = {
    rootMargin: '0px',
    threshold: 0.7
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
          sound1Stop();
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
          gear.classList.add("fadeIn");
        } else {
          dataC.classList.remove("fadeIn");
          dataC.classList.add("fadeOut");

          texto2.classList.remove("fadeInLeft");
          server.classList.remove("fadeIn");
          tube.classList.remove("fadeInDown");
          labtalk.classList.remove("fadeInRight");
          sound2Stop();
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
          gear.classList.add("fadeIn");
        } else {
          dataD.classList.remove("fadeIn");
          dataD.classList.add("fadeOut");

          texto3.classList.remove("fadeInLeft");
          dataGraph.classList.remove("fadeIn");
          tube_3.classList.remove("fadeInRight");
          computer_3.classList.remove("fadeInRight");
          labguy_3_1.classList.remove("fadeInUp");
          labguy_3_2.classList.remove("fadeInDown");
          sound3Stop();
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
          gear.classList.add("fadeIn");
        } else {
          dataE.classList.remove("fadeIn");
          dataE.classList.add("fadeOut");

          texto4.classList.remove("fadeInLeft");
          tube_4.classList.remove("fadeInRight");
          dataGraph_4.classList.remove("fadeIn");
          labguy_4.classList.remove("fadeInLeft");
          sound4Stop();
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
          gear.classList.add("fadeIn");
        } else {
          dataF.classList.remove("fadeIn");
          dataF.classList.add("fadeOut");

          texto5.classList.remove("fadeInLeft");
          comp_5_1.classList.remove("fadeInDown");
          comp_5_2.classList.remove("fadeInDownB");
          comp_5_3.classList.remove("fadeInDownC");
          center_5.classList.remove("fadeInRight");
          sound5Stop();
        }
      }
    });
  }, options);

  animateList.forEach((elms) => {
    observer.observe(elms);
  });

  //
  cssScrollSnapPolyfill();
});
