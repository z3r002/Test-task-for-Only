window.onload = function () {
     document.getElementById('magicButton').onclick = function () {
        let block1 = document.getElementById('block1');
        let block2 = document.getElementById('block2');

        block1.style.backgroundColor = 'blue';
        block2.style.visibility = 'hidden';
    }
};
