let NewArr = [];
let i = 0;
function prevItem() {
    if (i <= 0) {
        i = NewArr.length;
        document.getElementById('back').disabled = true;
        }
    i = i - 1;
    document.getElementById('next').disabled = false;
    return NewArr[i];
}
function nextItem () {
        i = i + 1;
    i = i % NewArr.length ;
    return NewArr[i];
}
function pagination (value, index){
    const pageButton = document.createElement('span');
    pageButton.textContent = index+1 + ' ';
    pageButton.onclick = function (){
        document.getElementById('page').style.background = NewArr[index];
        document.getElementById('back').disabled = false;
        document.getElementById('next').disabled = false;
    };
    document.getElementById('paginator').appendChild(pageButton)
}
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    i = i + 1;
    document.getElementById('back').disabled = false;
    NewArr.splice(i, NewArr.length);
        if (!NewArr.includes(bgColor)) {
            document.body.style.background = bgColor;
            NewArr.push(bgColor);
        }
console.log(NewArr);
    if (document.getElementById('check').checked) {
        if (NewArr.indexOf( bgColor=== -1)) {
            document.body.style.background = bgColor;
            NewArr.push(bgColor);
        } else {
            NewArr.splice(i, NewArr.length);
            NewArr.push(bgColor);
        }
    }
       document.getElementById('paginator').textContent = '';
         NewArr.forEach(pagination);
     return false;
}
function add_new_color() {
    if (!NewArr.includes(document.getElementById('box').value)) {
        NewArr.push(document.getElementById('box').value);
        document.body.style.background = document.getElementById('box').value;
        document.getElementById('back').disabled = false;
            document.getElementById('paginator').textContent = '';
            NewArr.forEach(pagination);
    console.log(NewArr);
    } return false;
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





