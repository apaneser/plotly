function init(){
    data = [{
        x: [1,2,3,4,5],
        y: [1,2,4,8,16]
    }];
    Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");

    var xdata = [1,2,3,4,5];
    var ydata = [];

    if (dataset === 'dataset1'){
        ydata = [1.2,4,8,16];
    };

    if (dataset === 'dataset2'){
        ydata = [1, 10, 100, 1000, 10000];
    };

    var trace = {
        x: [xdata],
        y: [ydata]
    };

    Plotly.restyle("plot", trace)
};

init();