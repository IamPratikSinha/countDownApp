const endDate = '20 March 2023';

//js date object - timestamp of a date in from 1 jan 1970 to that date
//new Date(<dateVal>)
const elem = document.getElementById('endDate');
elem.textContent = endDate;

const inputs = document.querySelectorAll('input');

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  //   console.log(end, now);
  let diff = end - now;
  console.log(diff); // in millisecond

  //converting millsec->sec
  diff = diff / 1000;

  // 1 day = 86400 sec
  // 1 hr = 3600 sec
  // 1 min = 60 sec

  inputs[0].value = Math.floor(diff / 86400);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};

setInterval(() => {
  clock();
}, 1000);
