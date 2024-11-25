const navOpen = document.querySelector('#nav-open');
const navClose = document.querySelector('#nav-close');
const navElement = document.querySelector('nav');

navOpen.addEventListener('click', function(){
    navElement.classList.remove('hide');

})

navClose.addEventListener('click', function(){
    navElement.classList.add('hide');

})

let tabs = document.querySelectorAll('.tabs .tab');
let tabContents = document.querySelectorAll('.contents .tab-content');

tabs.forEach((tab,index) => tab.addEventListener('click', () => {
  tabContents.forEach(content => content.classList.remove('show'));
  tabs.forEach(tab => {tab.classList.remove('active')});
  tabContents[index].classList.add('show');
  tabs[index].classList.add('active');
}));


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


const video = document.getElementById('video1');
  video.playbackRate = 0.5; // Slows down the video to half speed

  const video1 = document.getElementById('video2');
  video1.playbackRate = 0.5; // Slows down the video to half speed



  
  gsap.from( "a", {
    opacity : 0,
    y: 40,
    duration: 1,
    delay: 1,
    
    scrollTrigger: {
        trigger: "a",
        scroller: "body",
        markers: false,
        start: "top 60%",
        lazy: true
   
    }
 
 })

 gsap.from( "#menu-button", {
  opacity : 0,
  y: 40,
  duration: 1,
  delay: 1,
 
  scrollTrigger: {
      trigger: "#menu-button",
      scroller: "body",
      markers: false,
      start: "top 60%",
      lazy: true
 
  }

})
  
 // Create a GSAP timeline
const ml = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero-header", // Start when this element is in view
    scroller: "body",
    markers: false,
    start: "top 60%", // Adjust based on your layout
    lazy: true
  }
});

// Animate the hero header first
ml.from("#hero-header", {
  opacity: 0,
  y: 40,
  duration: 1
});

// Animate the hero CTA next, after the header animation completes
ml.from("#hero-cta", {
  opacity: 0,
  y: 40,
  duration: 1
});

// Change the color of #change-color after hero CTA animation
ml.to("#change-color", {
  color: "#A5E0DD",
  duration: 1
});

// Apply scaling and background color change to #hero-cta
ml.to("#hero-cta", {
  border: "none",
  scale: 1.1,
  backgroundColor: "#A5E0DD",
  color: "#020024",
  duration: 3,
  fontWeight: 600
});


  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2", // Common trigger element for all animations
      start: "top 60%", // Start animations when the body reaches 60% of the viewport
      markers: false,// Set to true to see debugging markers,
      lazy: true
    }
  });
  
  // Add all animations to the timeline
  tl.from("#page2-title", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2, // Slight stagger for h2 elements
  })
    .from("#how-we-offer-h3", {
      opacity: 0,
      y: "20%",
      duration: 1,
    }, "<") // "<" ensures this animation starts at the same time as the previous one
    .from("p", {
      opacity: 0,
      y: "20%",
      duration: 1,
    }, "<") // Synchronize start time
    .from("h4", {
      opacity: 0,
      y: "20%",
      duration: 1,
    }, "<") // Synchronize start time
    .to("#pillarCol1", {
      top: 0,
      y: "-25%",
      duration: 1,
    }, "<"); // Synchronize start time
    

    


  gsap.to("#gradient1",{
    background:
    "linear-gradient(225deg, hsla(193, 51%, 16%, 1) 17%, hsla(283, 49%, 22%, 1) 37%, hsla(266, 55%, 35%, 1) 54%, hsla(177, 70%, 41%, 1) 80%, hsla(166, 59%, 50%, 1) 100%)",
    duration: 2,
    delay: 1,
    scrollTrigger: "#gradient1",
    borderRadius: "10px"
  })

  gsap.to("#gradient2",{
    background:
    "linear-gradient(225deg, hsla(193, 51%, 16%, 1) 17%, hsla(283, 49%, 22%, 1) 37%, hsla(266, 55%, 35%, 1) 54%, hsla(177, 70%, 41%, 1) 80%, hsla(166, 59%, 50%, 1) 100%)",
    duration: 2,
    delay: 1,
    scrollTrigger: "#gradient1",
    borderRadius: "10px"
    
  })

  gsap.to("#gradient3",{
    background:
    "linear-gradient(225deg, hsla(193, 51%, 16%, 1) 17%, hsla(283, 49%, 22%, 1) 37%, hsla(266, 55%, 35%, 1) 54%, hsla(177, 70%, 41%, 1) 80%, hsla(166, 59%, 50%, 1) 100%)",
    duration: 2,
    delay: 1,
    scrollTrigger: "#gradient1",
    borderRadius: "10px"
    
  })

  gsap.to("#gradient4",{
    background:
    "linear-gradient(225deg, hsla(193, 51%, 16%, 1) 17%, hsla(283, 49%, 22%, 1) 37%, hsla(266, 55%, 35%, 1) 54%, hsla(177, 70%, 41%, 1) 80%, hsla(166, 59%, 50%, 1) 100%)",
    duration: 2,
    delay: 1,
    scrollTrigger: "#gradient1",
    borderRadius: "10px"
    
  })




gsap.to(".fancyborder",{
  background :  "linear-gradient(225deg, hsla(193, 51%, 16%, 1) 17%, hsla(283, 49%, 22%, 1) 37%, hsla(266, 55%, 35%, 1) 54%, hsla(177, 70%, 41%, 1) 80%, hsla(166, 59%, 50%, 1) 100%)",
  scrollTrigger: ".fancyborder",
  duration: 2,
  delay: 1
})


gsap.from( "#page3-title", {
  opacity : 0,
  y: 40,
  duration: 1,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
      trigger: "#page3-title",
      scroller: "body",
      markers: false,
      
      lazy: true
 
  }

})


gsap.from( ".container", {
  opacity : 0,
  y: 40,
  duration: 1,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
      trigger: ".container",
      scroller: "body",
      markers: false,
      
      lazy: true
 
  }

})


gsap.from( "#page4-title", {
  opacity : 0,
  y: 40,
  duration: 1,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
      trigger: "#page4-title",
      scroller: "body",
      markers: false,
     
      lazy: true
 
  }

})






gsap.from( "#page5-title", {
  opacity : 0,
  y: 40,
  duration: 1,
  delay: 1,
  stagger: 1,
  scrollTrigger: {
      trigger: "#page4-title",
      scroller: "body",
      markers: false,
     
      lazy: true
 
  }

})


/*const changeColor = document.querySelector('#fintech');

  changeColor.addEventListener('mouseenter', () => {
    gsap.to(".bx-right-arrow-circle", { scale: 1.1, duration: 0.3, ease: "power1.out", color: "magenta"});  // Scale up on hover
  });

  changeColor.addEventListener('mouseleave', () => {
    gsap.to(".bx-right-arrow-circle", { scale: 1, duration: 0.3, ease: "power1.out" });  // Return to original size
  });*/


  const blocks = document.querySelectorAll('.techbox');

  blocks.forEach(block => {
    // Mouse enter event
    block.addEventListener('mouseenter', () => {
      // Animate only the child components within the hovered block
      gsap.to(block.querySelectorAll( '.icon2, .bx-right-arrow-circle'), {
        color: "#a94064", // Change to desired color
        duration: 0.6,
        ease: "power1.out"
      });
    });

    // Mouse leave event
    block.addEventListener('mouseleave', () => {
      // Revert the color back to the original state
      gsap.to(block.querySelectorAll('.icon2, .bx-right-arrow-circle'), {
        color: "#ffffff", // Original color
        duration: 0.6,
        ease: "power1.out"
      });
    });
  });


  