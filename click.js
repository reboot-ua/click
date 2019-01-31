let NewArr = [];
let i = 0;
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
    NewArr.splice(i, NewArr.length);
    console.log(NewArr);

    let sameArr = [];
    let arr = NewArr.filter(function (el) {
        if (sameArr.indexOf(el) === -1) {
            sameArr.push(el);
            return true;
        }
        return false;
    });
console.log(arr);

return NewArr[i];
}
function add_new_color() {
    NewArr.push(document.getElementById('box').value);
    document.body.style.background = document.getElementById('box').value;
    document.getElementById('back').disabled = false;
    console.log(NewArr);
    return false;
}
function prevItem() {
    if (i <= 0) {
        i = NewArr.length
        }
    i = i - 1;
    document.getElementById('next').disabled = false;
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


