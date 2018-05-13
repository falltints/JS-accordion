window.onload = function () {
    var items = document.getElementsByClassName('item');

    for (var i = 0; i < items.length; i++) {
        (function (i) {
            items[i].onmouseover = function () {
                this.className = 'item big';
                for (var j = 0; j < items.length; j++) {
                    if (j === i) {
                        continue;
                    }
                    items[j].className = 'item';
                }
            };
        })(i);
    }
};