window.addEventListener('load',() => {
	setTimeout(()=>{
		window.scrollTo(0,0);
		document.documentElement.scrollTop = 0;
	},5);
});
Array.from(document.querySelectorAll('.lr-manifesto-container')).forEach((manifesto)=>{
	const media = manifesto.querySelector('.lp-manifesto-media');
	Array.from(manifesto.querySelectorAll('.lp-manifesto-content-text-item')).forEach((item)=>{
		  let itemtl = gsap.timeline({});
		  itemtl.from(item, {
		    opacity: 10
		   });
		  itemtl.to(item, {
		    filter:"blur(3px)",
		    opacity: 0, 
		    duration: 1,
		    scrollTrigger: {
		    	trigger: item,
		     	start: "center center",
		     	pin: true,
		     	pinSpacing: false,
		     	scrub: true,
		     	end: '120% center',
		     	markers: false
		     }
		  }, "1");
	});
	const tl = gsap.timeline();
	tl.from(media, {
		opacity: 10
	});
	tl.to(media, {
		filter:"blur(8px)",
		opacity: 0,
  		scrollTrigger: {
    		trigger: manifesto,
    		start: "top bottom",
    		end: "bottom bottom",
    		scrub: 0.5,
    		markers: false
	      }
	}, "1");
});


const openDoorTimeline = gsap.timeline({
	scrollTrigger:{
		trigger: '.door',
		start: 'center center',
		scrub: 1,
	}
});
openDoorTimeline.to('.left-door',{
	duration:.5,
	rotationY: '-90deg',
	skewY: 30,
	ease: Power0.easeNone,
})
.to('.right-door',{
	duration:.5,
	rotationY: '90deg',
	skewY: -30,
	ease: Power0.easeNone,
},0)