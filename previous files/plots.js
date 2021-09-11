// var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowth = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowth,
//     type: "bar"
// }

// data = [trace];

// layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Growth, 2016-2017"}
// };

// Plotly.newPlot("bar-plot", data, layout);

var sortedCities = cityGrowths.sort((a,b) => a.population - b.population).reverse();
var topSevenCities = sortedCities.slice(0,7);

var cityName = topSevenCities.map(city => city.City);
var cityPop = topSevenCities.map(city=> city.population);

var trace = {
    x: cityName,
    y: cityPop,
    type: "bar"
} 

data = [trace];

layout = {
    title: "top Seven Cities based on Population",
    xaxis: {title: "Name"},
    yaxis: {title: "City Population, 2016 - 2017"}
}

Plotly.newPlot('bar-plot', data, layout);