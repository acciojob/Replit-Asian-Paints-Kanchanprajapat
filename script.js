//your JS code hdocument.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset');

    changeButton.addEventListener('click', () => {
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;
        resetColors();
        const block = document.getElementById(blockId);
        if (block) {
            block.style.backgroundColor = color;
        } else {
            alert('Invalid block ID');
        }
    });

    resetButton.addEventListener('click', resetColors);

    function resetColors() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }
});
