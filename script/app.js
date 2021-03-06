(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the buttom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img"),
				puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				puzzleBoard = document.querySelector('.puzzle-board');

	// store the image names here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	//functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail images on the left to match the btton images
		pieces.forEach((piece, index) => {
		puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
		puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;
	});

		// and set a background image on the drop zone container
		// debugger;
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}

	function dragStart(event) {
		console.log('started a drag');

		// capture the id of the element we're dragging
		// the dataTransfer object is part of the drag event -> you can use this
		// to temporarily store data you can retieve and use later
		// like an audio track, as an example
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDrag(event) {
		event.preventDefault();
		console.log('you dragged something onto me!');
	}

	function allowDrop(event){
		console.log('you dropped something on me');


	let currentPiece = event.dataTransfer.getData("text/plain");

	event.target.appendChild(document.querySelector(`#${currentPiece}`));
}

	// Events
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
	puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragStart));
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDrag));
	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
	changeImageSet.call(navButtons[0])
})();
