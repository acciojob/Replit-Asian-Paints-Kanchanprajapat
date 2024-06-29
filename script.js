//your JS code hdocument.addEventListener('DOMContentLoaded', () => {
   document.getElementById('change_button').addEventListener('click', function() {
    var blockId = document.getElementById('block_id').value;
    var color = document.getElementById('colour_id').value;
    document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById('reset').addEventListener('click', function() {
    var gridItems = document.getElementsByClassName('grid-item');
    for(var i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = 'transparent';
    }
});