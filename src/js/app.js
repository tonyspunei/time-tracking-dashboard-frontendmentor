// cache the DOM
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const optionButtons = document.querySelectorAll(".option");

const hours = document.querySelectorAll(".hoursSpent");
const lastWeek = document.querySelectorAll(".lastWeek");

const getTimeData = async (query) => {
  const reqLink = `https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json`;
  const fetchData = await fetch(reqLink);
  const parsed = await fetchData.json();
  return parsed;
};

const getDailyData = (_) => {
  getTimeData().then((data) => {
    hours.forEach((e, i) => {
      hours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
      lastWeek[i].innerHTML = `${data[i].timeframes.daily.previous}`;
    });
  });
};

const getWeeklyData = (_) => {
  getTimeData().then((data) => {
    hours.forEach((e, i) => {
      hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      lastWeek[i].innerHTML = `${data[i].timeframes.weekly.previous}`;
    });
  });
};

const getMonthlyData = (_) => {
  getTimeData().then((data) => {
    hours.forEach((e, i) => {
      hours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
      lastWeek[i].innerHTML = `${data[i].timeframes.monthly.previous}`;
    });
  });
};

dailyBtn.addEventListener("click", (_) => {
  optionButtons.forEach((e) => {
    e.classList.remove("active");
  });
  dailyBtn.classList.add("active");

  getDailyData();
});

weeklyBtn.addEventListener("click", (_) => {
  optionButtons.forEach((e) => {
    e.classList.remove("active");
  });
  weeklyBtn.classList.add("active");

  getWeeklyData();
});

monthlyBtn.addEventListener("click", (_) => {
  optionButtons.forEach((e) => {
    e.classList.remove("active");
  });
  monthlyBtn.classList.add("active");

  getMonthlyData();
});
