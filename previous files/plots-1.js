//// Food Survey
// var trace = {
//     x: ["burrito", "picza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// }

// Plotly.newPlot("plotArea", [trace], layout);

//// Bar chart of nonalcoholic drinks
// var trace = {
//     x: ["nonalcoholic beer", "nonalcolholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };

// var layout = {
//     title: "Percentage of drink orders in a Non-Alcoholic Bar",
//     xaxis: {Title: "drinks"},
//     yaxis: {title: "Percent"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

//// Pie chart of nonalcoholic drinks
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcolholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };
// var data = [trace]
// var layout = {
//     title: "Percentage of drink orders in a Non-Alcoholic Bar",
// };

// Plotly.newPlot("plotArea", data, layout);

var trace1 = {
    x: ["nonalcoholic beer", "nonalcolholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'lines+markers',
    type: "scatter"
};

var trace2 = {
    x: ["nonalcoholic beer", "nonalcolholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [32.5, 21.9, 8.7, 7.5, 6.8, 5.1, 4.2, 2.5],
    mode: 'markers',
    type: "scatter"
};

var trace3 = {
    x: ["nonalcoholic beer", "nonalcolholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [24.8, 20.7, 6.8, 10.8, 6.4, 3.1, 5.8, 1.9],
    mode: 'markers',
    type: "scatter"
};

var layout = {
    title: "Percentage of drink orders in a Non-Alcoholic Bar",
    xaxis: {Title: "drinks"},
    yaxis: {title: "Percent"}
};
data = [trace1, trace2, trace3]

Plotly.newPlot("plotArea", data, layout);