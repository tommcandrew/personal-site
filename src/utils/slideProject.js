import gsap from "gsap";
const tl = gsap.timeline();

export const slideProject = (dir, setAnimating) => {
  //do nothing is animation is playing
  if (tl.isActive()) {
    return;
  }
  setAnimating(true);
  //slide both question and options out of view to left
  tl.to(".projectPreview__content", 1, {
    x: dir === "right" ? "-100vw" : "100vw",
    opacity: 0,
    ease: "Power2.ease-in",
  });

  //return question and options elements to original position (not visible)
  tl.to(".projectPreview__content", 0, {
    x: dir === "right" ? "100vw" : "-100vw",
  });
  //and fade them in
  tl.to(
    ".projectPreview__content",
    1,
    {
      opacity: 1,
      ease: "Power2.easeOut",
      x: 0,
    },
    ">+0.15"
  );
};
