const scenes = [
  {},
  {
    name: "money-shot",
    position: "0 0.7 -2.5",
    rotation: "0 0 0",
  },
  {
    name: "lobby",
    position: "-0.9 0.7 -2.5",
    rotation: "0 0 0",
  },
  {
    name: "office",
    position: "-0.7 0.6 -2.5",
    rotation: "0 0 0",
  },
  {
    name: "market",
    position: "0 1.3 -2.5",
    rotation: "0 0 0",
  },
];

const positionFront = { x: 0.25, y: 0.6, z: -0.599999 };
const positionBack = { x: 0.25, y: 0.6, z: -0.6 };

const firstScene = scenes[1];

AFRAME.registerState({
  initialState: {
    step: 0,
    presentationSrc: "#logo",
    vrViewSrc: `#${firstScene.name}`,
    nextBtnPosition: firstScene.position,
    nextBtnRotation: firstScene.rotation,
    hasVoiceOver: true,
    audioButtonPosition: positionBack,
    voStep: 0,
    voSettings: "src: #vo-0; autoplay: true",
    cinemaScr: "#cinema-blackout",
  },

  handlers: {
    incrementVOStep: function (state) {
      state.voStep++;
    },
    incrementStep: function (state) {
      state.step++;
      state.voStep++;
    },
    toggleAudio: function (state) {
      state.hasVoiceOver = !state.hasVoiceOver;
      state.audioButtonPosition = state.hasVoiceOver
        ? positionBack
        : positionFront;

      state.voSettings = `src: #vo-${state.voStep}; autoplay: ${state.hasVoiceOver}`;
    },
    reverseCinema: function (state) {
      state.cinemaScr = "#cinema-blackout-reverse";
    },
  },
  computeState: function (...args) {
    const [newState, action] = args;

    if (newState.hasVoiceOver) {
      newState.voSettings = `src: #vo-${newState.voStep}; autoplay: ${newState.hasVoiceOver}`;
    }

    if (
      newState.step !== 0 &&
      newState.step !== undefined &&
      action === "incrementStep"
    ) {
      const mask = document.querySelector("#mask");
      mask.emit("fadeout");

      setTimeout(() => {
        newState.presentationSrc = `#presentation-${newState.step}`;
        if (newState.step < scenes.length) {
          newState.vrViewSrc = `#${scenes[newState.step].name}`;
          newState.nextBtnPosition = `${scenes[newState.step].position}`;
          newState.nextBtnRotation = `${scenes[newState.step].rotation}`;
        }

        document
          .querySelector("#main-scene")
          ?.setAttribute("template", "src", "#cinema");

        setTimeout(() => {
          mask.emit("fadein");
          if (newState.step === 1) {
            const cinema = document.querySelector("#cinema-blackout");
            cinema.play();

            const mainScene = document.querySelector("#main-scene");
            mainScene.components.sound.playSound();

            setTimeout(() => {
              cinema.pause();
            }, 9000);
          }

          const screenTimeout = newState.step === 1 ? 1000 : 0;

          setTimeout(() => {
            const screen = document.querySelector("#curved-screen");
            screen.emit("fadein");

            setTimeout(() => {
              document.querySelector(newState.presentationSrc).play();
            }, screenTimeout * 5);
          }, screenTimeout);
        }, 500);
      }, 500);
    }

    if (action === "reverseCinema") {
      // const cinema = document.querySelector(newState.cinemaScr);
      const cinema = document.querySelector("#cinema-blackout");

      const cb = () => {
        document
          .querySelector("#main-scene")
          ?.setAttribute("template", "src", "#initial-logo");
      };

      cinema.addEventListener("ended", cb);
      cinema.play();

      setTimeout(() => {
        const screen = document.querySelector("#curved-screen");
        screen.emit("fadeout");
      }, 7000);
    }
  },
});
