//Temperature Conversion

let Celsius = "C";
let kelvin = "K";
let Fahrenheit = "F";

alert(
  "Please use these abriviations for temparatures: for Celsius = C, for kelvin = K, for  Fahrenheit = F"
);

let CurrentMetricTemp = prompt(
  "In which metric is the temperature you are converting?: "
);

let converto = prompt(
  "Which metric would you like to convert the temperature?:"
);

let temp = Number(prompt("Enter Temperature:"));

if (CurrentMetricTemp == "C" && converto == "K") {
  console.log(
    `${temp}` + " C" + " is " + " " + Math.round(temp + 273.15) + " K"
  );
} else if (CurrentMetricTemp == "C" && converto == "F") {
  console.log(
    `${temp}` + " C" + " is " + Math.round(temp * (9 / 5) + 32) + " F"
  );
} else if (CurrentMetricTemp == "F" && converto == "C") {
  console.log(
    `${temp}` + " F " + " is " + Math.round((5 / 9) * (temp - 32)) + " C"
  );
} else if (CurrentMetricTemp == "K" && converto == "C") {
  console.log(`${temp}` + " K " + " is " + Math.round(temp + 273.15) + " C");
} else if (CurrentMetricTemp == "K" && converto == "F") {
  console.log(
    `${temp}` + " K " + " is " + Math.round(temp * (9 / 5) - 459.67) + " F"
  );
} else if (CurrentMetricTemp == "F" && converto == "K") {
  console.log(
    `${temp}` + " F " + " is " + Math.round((5 / 9) * (temp + 459.67)) + " K"
  );
}
