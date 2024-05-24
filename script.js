const container = document.querySelector("#container");
const button = document.querySelector("button");

create_grid(16);

function create_grid(size) {
    for (i = 0; i < size; i++) {
        row = document.createElement("div");
        row.id = "row";
        container.appendChild(row);
        for (j = 0; j < size; j++) {
            col = document.createElement("div");
            col.id = "col";
            row.appendChild(col);
        }
    }

    cols = document.querySelectorAll("#col");

    cols.forEach((col) => {
        col.addEventListener("mouseenter", () => {
            col.style.backgroundColor = "red";
        });
    });
}
function delete_grid() {
    rows = document.querySelectorAll("#row");
    rows.forEach((row) => {
        row.remove();
    });
}

button.addEventListener("click", () => {
    size = prompt("how big is the grid?");
    if (size > 100) {
        size = prompt("how big is the grid?")
    }
    delete_grid();
    create_grid(size);
});

