const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receiveData => console.log(receiveData));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(item => console.log([item[0].location.latitude, item[0].location.longitude]));

d3.json("/samples.json").then(function(data){
    wfreq = data.metadata.map(item => item.wfreq).sort((a,b) => a-b).reverse();
    console.log(data);
    // Object.entries(data.metadata[0]).forEach(item => console.log(item));
    Object.entries(data.metadata[0]).forEach(([key, value]) => {console.log(key + ': ' + value)});

});