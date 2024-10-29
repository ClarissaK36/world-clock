function showClock(event) {
    if (event.target.value.length > 0) {
      let countryTime = moment()
        .tz(event.target.value)
        .format("dddd, MMMM D, YYYY h:mm A");

      alert(`It is ${countryTime} in ${event.target.value}`);
    }
  }

  let countryElement = document.querySelector("#countries");
  countryElement.addEventListener("change", showClock);