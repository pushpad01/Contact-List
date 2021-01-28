const names = [
    "Sajal",
    "Pushpad",
    "Dad",
    "Rishu",
    "Kshitij",
    "Prateek",
    "Sudhanshu",
    "Himanshu",
    "Shipra",
    "Meetu"
];


const root = new makeNode('\0');
for(const name of names) {
    add(name,0,root);
}


const text_box = document.getElementById("text-box");
const list = document.getElementById("list");


function handler(e) {
    const name = e.target.value;
    const predictions = search(name,0,root);

    console.log(predictions);

    list.innerHTML = "";
    for(const prediction of predictions) {
        list.innerHTML += `<li class="clickable" onClick = "handleClick(this)"><b>${name}</b>${prediction.substring(name.length)}</li>`;
    }

}

function handleClick(e) {
    const text  = e.innerHTML.split("<b>").join("").split("</b>").join("");
    text_box.value = text;
}

handler({target: {value: ""}});

text_box.addEventListener("keyup",handler);