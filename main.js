const tabld = document.getElementById("tb");
const btn = document.getElementById("bt");
const load = document.getElementById("load")
const ipp = document.getElementById("ip");
const country = document.getElementById("cu");
const image = document.getElementById("ig");
const countryCode = document.getElementById("cuc");
const city = document.getElementById("city");
const internet = document.getElementById("io");


const getIpUrl = "https://api.ipgeolocation.io/getip";
const baseIpDetailsUrl = "https://api.ipgeolocation.io/ipgeo?apiKey=3c0cda12ff5a41faa7f62ee422ffe7dd&ip="

if (navigator.onLine) {
   console.log("online");
} else if (!navigator.onLine) {
   console.log("offline");
}
else {
   console.log("unknown");
}

async function main() {
   try {
      if (navigator.onLine) {
         const xTime = setTimeout(() => {
            btn.style.display = "";
            load.style.display = "";
            return false
         }, 20000)
         btn.style.display = "none";
         load.style.display = "block";



         let ipRes = await fetch(getIpUrl);
         let ipData = await ipRes.json();
         ipData = ipData.ip;

         let res = await fetch(baseIpDetailsUrl + ipData)
         let data = await res.json();
         ipp.innerText = data.ip;
         country.innerText = data.country_name;
         image.src = data.country_flag;
         countryCode.innerText = data.country_code2;
         city.innerText = data.city;
         internet.innerText = data.isp;


         tabld.style.display = "block";
         load.style.display = "none";

         clearTimeout("xTime")
      } else if (!navigator.onLine) {
         window.ononline = () => {
            main()
         }
      }
   } catch (e) {
      console.log(e);
   }
}