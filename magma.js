function loco() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco()


var motion_write = "";

document.querySelector("#page2>p").textContent.split("").forEach(function (dets) {
  motion_write += `<span>${dets}</span>`

  document.querySelector("#page2>p").innerHTML = motion_write;
})


gsap.to("#page2>p>span", {
  scrollTrigger: {
    trigger: `#page2>p>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})

function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  public/frames00007.png
  public/frames00010.png
  public/frames00013.png
  public/frames00016.png
  public/frames00019.png
  public/frames00022.png
  public/frames00025.png
  public/frames00028.png
  public/frames00031.png
  public/frames00034.png
  public/frames00037.png
  public/frames00040.png
  public/frames00043.png
  public/frames00046.png
  public/frames00049.png
  public/frames00052.png
  public/frames00055.png
  public/frames00058.png
  public/frames00061.png
  public/frames00064.png
  public/frames00067.png
  public/frames00070.png
  public/frames00073.png
  public/frames00076.png
  public/frames00079.png
  public/frames00082.png
  public/frames00085.png
  public/frames00088.png
  public/frames00091.png
  public/frames00094.png
  public/frames00097.png
  public/frames00100.png
  public/frames00103.png
  public/frames00106.png
  public/frames00109.png
  public/frames00112.png
  public/frames00115.png
  public/frames00118.png
  public/frames00121.png
  public/frames00124.png
  public/frames00127.png
  public/frames00130.png
  public/frames00133.png
  public/frames00136.png
  public/frames00139.png
  public/frames00142.png
  public/frames00145.png
  public/frames00148.png
  public/frames00151.png
  public/frames00154.png
  public/frames00157.png
  public/frames00160.png
  public/frames00163.png
  public/frames00166.png
  public/frames00169.png
  public/frames00172.png
  public/frames00175.png
  public/frames00178.png
  public/frames00181.png
  public/frames00184.png
  public/frames00187.png
  public/frames00190.png
  public/frames00193.png
  public/frames00196.png
  public/frames00199.png
  public/frames00202.png
 `;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page3`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `250% top`,
  });
}
canvas()

var motion_write = "";

document.querySelector("#page4>p").textContent.split("").forEach(function (dets) {
  motion_write += `<span>${dets}</span>`

  document.querySelector("#page4>p").innerHTML = motion_write;
})


gsap.to("#page4>p>span", {
  scrollTrigger: {
    trigger: `#page4>p>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})

function canvas1() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      public/bridges00004.png
public/bridges00007.png
public/bridges00010.png
public/bridges00013.png
public/bridges00016.png
public/bridges00019.png
public/bridges00022.png
public/bridges00025.png
public/bridges00028.png
public/bridges00031.png
public/bridges00034.png
public/bridges00037.png
public/bridges00040.png
public/bridges00043.png
public/bridges00046.png
public/bridges00049.png
public/bridges00052.png
public/bridges00055.png
public/bridges00058.png
public/bridges00061.png
public/bridges00064.png
public/bridges00067.png
public/bridges00070.png
public/bridges00073.png
public/bridges00076.png
public/bridges00079.png
public/bridges00082.png
public/bridges00085.png
public/bridges00088.png
public/bridges00091.png
public/bridges00094.png
public/bridges00097.png
public/bridges00100.png
public/bridges00103.png
public/bridges00106.png
public/bridges00109.png
public/bridges00112.png
public/bridges00115.png
public/bridges00118.png
public/bridges00121.png
public/bridges00124.png
public/bridges00127.png
public/bridges00130.png
public/bridges00133.png
public/bridges00136.png
public/bridges00139.png
public/bridges00142.png
public/bridges00145.png
public/bridges00148.png
public/bridges00151.png
public/bridges00154.png
public/bridges00157.png
public/bridges00160.png
public/bridges00163.png
public/bridges00166.png
public/bridges00169.png
public/bridges00172.png
public/bridges00175.png
public/bridges00178.png
public/bridges00181.png
public/bridges00184.png
public/bridges00187.png
public/bridges00190.png
public/bridges00193.png
public/bridges00196.png
public/bridges00199.png
public/bridges00202.png
     `;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5`,
      //   set start end according to preference
      start: `top top`,
      end: `500% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page5",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `500% top`,
  });
}
canvas1()

var motion_write = "";

document.querySelector("#page6>p").textContent.split("").forEach(function (dets) {
  motion_write += `<span>${dets}</span>`

  document.querySelector("#page6>p").innerHTML = motion_write;
})


gsap.to("#page6>p>span", {
  scrollTrigger: {
    trigger: `#page6>p>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})

function canvas2() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2
     `;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page7`,
      //   set start end according to preference
      start: `top top`,
      end: `500% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `500% top`,
  });
}
canvas2()

gsap.to(".circle", {
  scrollTrigger: {
    trigger: `.circle`,
    start: `top center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: 0.5
  },
  scale: 2
})

gsap.to(".inner-circle", {
  scrollTrigger: {
    trigger: `.inner-circle`,
    start: `top center`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  backgroundColor: `#0a3bce91`,
})

var percent = { value: 0 };
gsap.to(percent, {
  value: 100,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top top",
    end: "500% top",
    scrub: 0.15,
    onUpdate: function () {
      document.querySelector(".inner-circle span").textContent = Math.round(percent.value) + "%";
    }
  }
});

gsap.from(".page8-bottom h1, .page8-bottom button", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".left9 h1, .right9-center", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page9",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".right10-inner h1, .right10-inner p", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page10",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from("#page11 h1, .page11-inner", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page11",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".page12-inner h1, .page12-inner p", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page12",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from("#page13 h1, #page13 button", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page13",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

gsap.from(".page14-inner", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page14",
    scroller: "#main",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
});

// Modal Logic
const modal = document.getElementById("demo-modal");
const closeButton = document.querySelector(".close-button");
const bookButtons = document.querySelectorAll("#right-nav button:first-child, #page13 button, .write-page1-inner button, .page8-bottom button"); // Selecting all potential book buttons

bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.remove("modal-hidden");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("modal-hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("modal-hidden");
  }
});

document.getElementById("demo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("We will reach out to you soon");
  modal.classList.add("modal-hidden");
  e.target.reset();
});
 
// GSAP timeline update
/* Fixed mobile styling */
<!-- Added accessible label -->
// Refactored event listener