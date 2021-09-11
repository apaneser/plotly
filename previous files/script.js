d3.selectAll("body").on("change", updatePage)

function updatePage(){
    var menuOptions = d3.selectAll("#selectMenu").node();
    optionSelect = menuOptions.value;

    console.log(optionSelect);
}