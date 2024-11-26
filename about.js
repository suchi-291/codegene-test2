document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Select all about-blocks
    const aboutBlocks = document.querySelectorAll(".about-block");
  
    aboutBlocks.forEach((block) => {
      const decorDiv = block.querySelector(".about-block-text-decor");
      
      // Create ScrollTrigger for each block
      gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 80%",   // Animation starts when the top of the block hits 80% of the viewport
          end: "top 30%",     // Ends at 30% of the viewport
          scrub: 1,           // Smooth scrubbing effect
          toggleActions: "play reverse play reverse", // Replay on scroll up
        }
      })
      .to(block, { borderColor: "#ff5733", duration: 1 }) // Change border color
      .to(decorDiv, { backgroundColor: "rgb(6, 126, 163)", color: "white", duration: 1 }, "<"); // Change background and text color
    });
  });



  /* Horizontal scroll */

const races = document.querySelector(".races");
function getScrollAmount(){
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
});

ScrollTrigger.create({
    trigger: ".racesWrapper",
    start: "top 20%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub:1,
    invalidateOnRefresh: true,
    markers:false,
})
  