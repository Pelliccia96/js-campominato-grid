const buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function() {
    const options = document.getElementById("grids");
    let grid = parseInt(options.value);

    grid = grid * grid;
    console.log(grid);
})
