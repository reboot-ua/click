let NewArr = [];
let i = 0;

function prevItem() {
    if (i <= 0) {
        i = NewArr.length
    }
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
    i = i + 1;
    document.getElementById('back').disabled = false;
    return NewArr[i];


}
function nextItem () {
    i = i + 1;
    i = i % NewArr.length;
    return NewArr[i];
}
    document.getElementById('change').onclick = random_bg_color;
    document.getElementById('back').onclick =
        function() {
            document.getElementById('page').style.background = prevItem();
        };

document.getElementById('next').onclick =
    function() {
        document.getElementById('page').style.background = nextItem();
    };
document.getElementById('back').disabled = false;