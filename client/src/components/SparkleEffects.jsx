import { useEffect } from "react";

const SparkleEffect = () => {
  useEffect(() => {
    const colour = "#FFFFFF";
    const sparkles = 40;
    let x = 400,
      y = 300,
      ox = 400,
      oy = 300,
      swide = 800,
      shigh = 600,
      sleft = 0,
      sdown = 0;

    const tiny = [];
    const star = [];
    const starv = [];
    const starx = [];
    const stary = [];
    const tinyx = [];
    const tinyy = [];
    const tinyv = [];

    const sparkle = () => {
      let c;
      if (x !== ox || y !== oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) {
          if (!starv[c]) {
            star[c].style.left = `${(starx[c] = x)}px`;
            star[c].style.top = `${(stary[c] = y)}px`;
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
          }
        }
      }
      for (c = 0; c < sparkles; c++) {
        if (starv[c]) updateStar(c);
        if (tinyv[c]) updateTiny(c);
      }
      setTimeout(sparkle, 40);
    };

    const updateStar = (i) => {
      if (--starv[i] === 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        if (stary[i] < shigh + sdown) {
          star[i].style.top = `${stary[i]}px`;
          starx[i] += ((i % 5) - 2) / 5;
          star[i].style.left = `${starx[i]}px`;
        } else {
          star[i].style.visibility = "hidden";
          starv[i] = 0;
        }
      } else {
        tinyv[i] = 50;
        tiny[i].style.top = `${(tinyy[i] = stary[i])}px`;
        tiny[i].style.left = `${(tinyx[i] = starx[i])}px`;
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible";
      }
    };

    const updateTiny = (i) => {
      if (--tinyv[i] === 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        if (tinyy[i] < shigh + sdown) {
          tiny[i].style.top = `${tinyy[i]}px`;
          tinyx[i] += ((i % 5) - 2) / 5;
          tiny[i].style.left = `${tinyx[i]}px`;
        } else {
          tiny[i].style.visibility = "hidden";
          tinyv[i] = 0;
        }
      } else {
        tiny[i].style.visibility = "hidden";
      }
    };

    const setScroll = () => {
      if (typeof window.pageYOffset === "number") {
        sdown = window.pageYOffset;
        sleft = window.pageXOffset;
      } else if (document.body.scrollTop || document.body.scrollLeft) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
      } else if (
        document.documentElement &&
        (document.documentElement.scrollTop ||
          document.documentElement.scrollLeft)
      ) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
      } else {
        sdown = 0;
        sleft = 0;
      }
    };

    const setWidth = () => {
      if (typeof window.innerWidth === "number") {
        swide = window.innerWidth;
        shigh = window.innerHeight;
      } else if (
        document.documentElement &&
        document.documentElement.clientWidth
      ) {
        swide = document.documentElement.clientWidth;
        shigh = document.documentElement.clientHeight;
      } else if (document.body.clientWidth) {
        swide = document.body.clientWidth;
        shigh = document.body.clientHeight;
      }
    };

    const createDiv = (height, width) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.height = `${height}px`;
      div.style.width = `${width}px`;
      div.style.overflow = "hidden";
      div.style.backgroundColor = colour;
      return div;
    };

    document.onmousemove = (e) => {
      setScroll();
      y = e ? e.pageY : window.event.y + sdown;
      x = e ? e.pageX : window.event.x + sleft;
    };

    for (let i = 0; i < sparkles; i++) {
      const rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      document.body.appendChild((tiny[i] = rats));
      starv[i] = 0;
      tinyv[i] = 0;
      const starElem = createDiv(5, 5);
      starElem.style.backgroundColor = "transparent";
      starElem.style.visibility = "hidden";
      const rlef = createDiv(1, 5);
      const rdow = createDiv(5, 1);
      starElem.appendChild(rlef);
      starElem.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild((star[i] = starElem));
    }

    setWidth();
    sparkle();
    window.onresize = setWidth;

    return () => {
      document.onmousemove = null; // Cleanup when the component unmounts
    };
  }, []);

  return null; // No UI is needed for this component
};

export default SparkleEffect;
