let NewArr = [];
var i = 0;

function nextItem() {
    i = i + 1;
    i = i % NewArr.length;
    return NewArr[i];
}

function prevItem() {
    if (i === 0) {
        i = NewArr.length}
    else
    {  NewArr.pop();}

    i = i - 1;
    return NewArr[i];
}

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;

    NewArr.push(bgColor);
    console.log(NewArr);

}



document.getElementById('change').onclick = random_bg_color , nextItem;

document.getElementById('back').addEventListener(
    'click', // we want to listen for a click
    function () { // the e here is the event itself
        document.getElementById('page').style.background = prevItem();
    }
);


