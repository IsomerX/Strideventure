function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("ext-menu").classList.toggle("show-menu");
}

// const cursor = document.getElementById("circle");
// document.addEventListener("DOMContentLoaded", () => {
//   let mousePosX = 0,
//     mousePosY = 0,
//     mouseCircle = document.getElementById("circle");

//   document.onmousemove = (e) => {
//     mousePosX = e.pageX - cursor.offsetHeight / 2;
//     mousePosY = e.pageY - cursor.offsetHeight / 2;
//   };

//   let delay = 6,
//     revisedMousePosX = 0,
//     revisedMousePosY = 0;

//   function delayMouseFollow() {
//     requestAnimationFrame(delayMouseFollow);

//     revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
//     revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

//     mouseCircle.style.top = revisedMousePosY + "px";
//     mouseCircle.style.left = revisedMousePosX + "px";
//   }
//   delayMouseFollow();
// });

// document.addEventListener("click", () => {
//   cursor.classList.add("expand");
//   setTimeout(() => {
//     cursor.classList.remove("expand");
//   }, 500);
// });


// $(function () {
//   $("a").hover(
//     function () {
//       $("#circle").animate({ height: "70px", width: "70px" }, 200);
//     },
//     function () {
//       $("#circle").animate({ height: "50px", width: "50px" }, 100);
//     }
//   );
// });
// $(function () {
//   $(".hamburger2").hover(
//     function () {
//       $("#circle").animate({ height: "70px", width: "70px" }, 200);
//     },
//     function () {
//       $("#circle").animate({ height: "50px", width: "50px" }, 100);
//     }
//   );
// });
// $(function () {
//   $(".row").hover(
//     function () {
//       $("#circle").animate({ height: "70px", width: "70px" }, 200);
//     },
//     function () {
//       $("#circle").animate({ height: "50px", width: "50px" }, 100);
//     }
//   );
// });
