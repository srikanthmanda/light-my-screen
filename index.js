'use strict';

const colourPicker = document.getElementById('colour_picker');

colourPicker.addEventListener('input', changeColour, false);
colourPicker.addEventListener('change', changeColour, false);

function changeColour(colourChangeEvent) {
	document.body.style.backgroundColor = colourChangeEvent.target.value;
}