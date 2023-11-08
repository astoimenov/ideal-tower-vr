AFRAME.registerComponent("change-to-360", {
  init: function () {
    this.maskEl = this.el.sceneEl.querySelector("#mask");
    const stateSystem = AFRAME.scenes[0].systems.state;
    const videoSrc = stateSystem.state.presentationSrc;
    const video = document.querySelector(videoSrc);

    const handleTo360 = () => {
      this.maskEl.emit("fadeout");
      const self = this;
      video.removeEventListener("ended", handleTo360);

      setTimeout(() => {
        document
          .querySelector("#main-scene")
          ?.setAttribute("template", "src", "#vr-view");
        setTimeout(() => {
          self.maskEl.emit("fadein");

          // change audio
          stateSystem.dispatch("incrementVOStep");
        }, 500);
      }, 500);
    };

    const handleEnd = () => {
      video.removeEventListener("ended", handleEnd);

      // change cinema video and play it
      stateSystem.dispatch("reverseCinema");
    };

    video.addEventListener(
      "ended",
      stateSystem.state.step < 5 ? handleTo360 : handleEnd
    );
  },
});
