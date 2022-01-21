// local time
const hourHand_el = document.querySelector(".indHour");
const minuteHand_el = document.querySelector(".indMinutes");
const secondHand_el = document.querySelector(".indSeconds");
const local_digital_label = document.getElementById("local-digital-clock");

// usa clock
const usaHour_el = document.querySelector(".Usahour");
const usaMinute_el = document.querySelector(".Usaminutes");
const usaSeconds_el = document.querySelector(".Usaseconds");
const usa_digitalTime_label = document.getElementById("usa-digital-clock");

// london clock
const ukHour_el = document.querySelector(".ukHour");
const ukMinutes_el = document.querySelector(".ukMinutes");
const ukSeconds_el = document.querySelector(".ukSeconds");
const uk_digitalTime_label = document.getElementById("uk-digital-clock");

// tokyo clock
const tyoHour_el = document.querySelector(".tyoHour");
const tyoMinutes_el = document.querySelector(".tyoMinutes");
const tyoSeconds_el = document.querySelector(".tyoSeconds");
const tyo_digitalTime_label = document.getElementById("tyo-digital-clock");

// australia time
const australiaHour_el = document.querySelector(".australiaHour");
const australiaMinutes_el = document.querySelector(".autraliaMinutes");
const australiaSeconds_el = document.querySelector(".australiaSeconds");
const australia_digitalTime_label = document.getElementById(
  "australia-digital-clock"
);

// africa time
const africaHour_el = document.querySelector(".africaHour");
const africaMinutes_el = document.querySelector(".africaMinutes");
const africaSeconds_el = document.querySelector(".africaSeconds");
const africa_digitalTime_label = document.getElementById(
  "africa-digital-clock"
);

// cites
const cities = document.querySelectorAll(".reveal");

// checkboxes
const checkboxes = document.querySelectorAll(".checkbox");

const removeClass = function (e) {
  cities.forEach((city) => {
    if (e.target.dataset.city === city.dataset.city) {
      city.classList.remove("hidden");
    }
  });
};
function addClass(e) {
  cities.forEach((city) => {
    if (e.target.dataset.city === city.dataset.city) {
      city.classList.add("hidden");
    }
  });
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", function (e) {
    e.target.checked ? removeClass(e) : addClass(e);
  })
);

const Option = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const setClock = function () {
  const date = new Date();

  // local time
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours();

  const hour_rotation = 30 * h + m / 2;
  const second_rotation = 6 * s;
  const minute_rotation = 6 * m;

  hourHand_el.style.transform = `rotate(${hour_rotation}deg)`;
  minuteHand_el.style.transform = `rotate(${minute_rotation}deg)`;
  secondHand_el.style.transform = `rotate(${second_rotation}deg)`;
  const locale = navigator.language;
  local_digital_label.textContent = Intl.DateTimeFormat(locale, Option).format(
    date
  );

  // usa time
  const usaTime = date.toLocaleString("en-US", { timeZone: "America/Chicago" });

  const usaDate = new Date(usaTime);
  const usaHour = usaDate.getHours();
  const usaMinute = usaDate.getMinutes();
  const usaSeoconds = usaDate.getSeconds();

  const UsaHour_rotation = 30 * usaHour + usaMinute / 2;
  const usaSeconds_rotation = 6 * usaSeoconds;
  const usaMinute_rotation = 6 * usaMinute;

  usaHour_el.style.transform = `rotate(${UsaHour_rotation}deg)`;
  usaMinute_el.style.transform = `rotate(${usaMinute_rotation}deg)`;
  usaSeconds_el.style.transform = `rotate(${usaSeconds_rotation}deg)`;
  usa_digitalTime_label.textContent = Intl.DateTimeFormat(
    "en-US",
    Option
  ).format(usaDate);

  // uk time
  const ukTime = date.toLocaleString("en-US", { timeZone: "Europe/London" });
  const ukDate = new Date(ukTime);

  const ukHour = ukDate.getHours();
  const ukMinutes = ukDate.getMinutes();
  const ukSeconds = ukDate.getSeconds();

  const ukHour_rotation = 30 * ukHour + ukMinutes / 2;
  const ukseconds_rotation = 6 * ukSeconds;
  const ukMinutes_rotation = 6 * ukMinutes;

  ukHour_el.style.transform = `rotate(${ukHour_rotation}deg)`;
  ukMinutes_el.style.transform = `rotate(${ukMinutes_rotation}deg)`;
  ukSeconds_el.style.transform = `rotate(${ukseconds_rotation}deg)`;
  uk_digitalTime_label.textContent = Intl.DateTimeFormat(
    "en-US",
    Option
  ).format(ukDate);

  // tokyo time

  const tyoTime = date.toLocaleString("en-US", { timeZone: "JST" });
  const tyoDate = new Date(tyoTime);

  const tyoHour = tyoDate.getHours();
  const tyoMinutes = tyoDate.getMinutes();
  const tyoSeconds = tyoDate.getSeconds();

  const tyoHour_rotation = 30 * tyoHour + tyoMinutes / 2;
  const tyoSeconds_rotation = 6 * tyoSeconds;
  const tyoMinutes_rotation = 6 * tyoMinutes;

  tyoHour_el.style.transform = `rotate(${tyoHour_rotation}deg)`;
  tyoMinutes_el.style.transform = `rotate(${tyoMinutes_rotation}deg)`;
  tyoSeconds_el.style.transform = `rotate(${tyoSeconds_rotation}deg)`;
  tyo_digitalTime_label.textContent = Intl.DateTimeFormat(
    "en-US",
    Option
  ).format(tyoDate);

  // australia time

  const australiaTime = date.toLocaleString("en-US", {
    timeZone: "Australia/ACT",
  });
  const australiaDate = new Date(australiaTime);

  const australiaHour = australiaDate.getHours();
  const australiaMinutes = australiaDate.getMinutes();
  const australiaSeconds = australiaDate.getSeconds();

  const australiaHour_rotation = 30 * australiaHour + australiaMinutes / 2;
  const australiaSeconds_rotation = 6 * australiaSeconds;
  const australiaMinutes_rotation = 6 * australiaMinutes;

  australiaHour_el.style.transform = `rotate(${australiaHour_rotation}deg)`;
  australiaMinutes_el.style.transform = `rotate(${australiaMinutes_rotation}deg)`;
  australiaSeconds_el.style.transform = `rotate(${australiaSeconds_rotation}deg)`;
  australia_digitalTime_label.textContent = Intl.DateTimeFormat(
    "en-US",
    Option
  ).format(australiaDate);

  // africa time zone

  const africaTime = date.toLocaleString("en-US", {
    timeZone: "Africa/Abidjan",
  });
  const africaDate = new Date(africaTime);

  const africaHour = africaDate.getHours();
  const africaMinutes = africaDate.getMinutes();
  const africaSeconds = africaDate.getSeconds();

  const africaHour_rotation = 30 * africaHour + africaMinutes / 2;
  const africaSeconds_rotation = 6 * africaSeconds;
  const africaMinutes_rotation = 6 * africaMinutes;

  africaHour_el.style.transform = `rotate(${africaHour_rotation}deg)`;
  africaMinutes_el.style.transform = `rotate(${africaMinutes_rotation}deg)`;
  africaSeconds_el.style.transform = `rotate(${africaSeconds_rotation}deg)`;
  africa_digitalTime_label.textContent = Intl.DateTimeFormat(
    "en-US",
    Option
  ).format(africaDate);
};

setInterval(setClock, 1000);
setClock();
