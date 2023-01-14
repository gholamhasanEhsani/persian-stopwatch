const minute = document.getElementById("hour");
let cm = 0;
const second = document.getElementById("minute");
let cs = 0;
const milisecond = document.getElementById("second");
let cms = 0;
const pl = document.getElementById("play");
const st = document.getElementById("pause");
const re = document.getElementById("reset");
let interval;
const intervalTime = 16;
let isFirst = true;
const i = document.getElementById("info");



st.style.display = "none";


pl.addEventListener("click", play);

function play() {
   update();
   interval = setInterval(update, intervalTime);
   pl.style.display = "none";
   st.style.display = "block";
   if (isFirst) {
      Swal.fire({
         title: 'هورااااااا!',
         text: 'کرنومتر شروع شد.',
         icon: 'info',
         timer: 2000,
         showConfirmButton: false
      })
   }
   isFirst = false;
}
st.addEventListener("click", pause)

function pause() {
   clearInterval(interval)
   st.style.display = "none";
   pl.style.display = "block";
}
re.addEventListener("click", reset);

function reset() {
   clearInterval(interval);
   cm = "00";
   cs = "00";
   cms = "000";
   minute.innerText = cm;
   second.innerText = cs;
   milisecond.innerText = cms;
   st.style.display = "none";
   pl.style.display = "block";
}




function update() {
   cms = Number(cms);
   cms += intervalTime;
   if (cms < 10) {
      milisecond.innerText = "00" + cms;
   } else if (cms < 100) {
      milisecond.innerText = "0" + cms;
   } else if (cms < 1000) {
      milisecond.innerText = cms;
   } else if (cms >= 1000) {
      cms -= 1000;
      cs++
      milisecond.innerText = "000";
      if (cs < 10) {
         second.innerText = "0" + cs;
      } else if (cs < 60) {
         second.innerText = cs;
      } else if (cs == 60) {
         cs -= 60;
         cm++
         second.innerText = "00";
         if (cm < 10) {
            minute.innerText = "0" + cm
         } else if (cm >= 10) {
            minute.innerText = cm;
         }
      }
   }
}
setTimeout(start, 500)

function start() {
   Swal.fire({
      icon: 'success',
      title: "سلام کرنومتر جانم!",
      text: "طراحی شده توسط غلام حسن احسانی",
      timer: 2500,
      showConfirmButton: false
   })
}
i.addEventListener("click", () => {
   Swal.fire({
      icon: 'info',
      title: "موارد استفاده شده در این پروژه",
      html: `<p>پیغام های <a href="https://sweetalert2.github.io">Sweet Alert</a></p>
      <br />
      <p>و مغز عزیزم!</p>
      `,
      footer: `<p>صفحه غلام حسن احسانی در <a href="https://github.com/gholamhasanEhsani">گیت هاب</a></p>`
   })
})