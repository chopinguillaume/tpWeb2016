// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xi = 0;
	this.yi = 0;
	this.xf = 0;
	this.yf = 0;
	this.active = false;

	// Developper les 3 fonctions gérant les événements

	this.mouseDown = function (evt) {
		this.active = true;
		var mouse = getMousePosition(canvas, evt);
		this.xi = mouse.x;
		this.yi = mouse.y;
		interactor.onInteractionStart(this);
	}.bind(this);

	this.mouseUp = function (evt) {
		this.active = false;
		var mouse = getMousePosition(canvas, evt);
		this.xf = mouse.x;
		this.yf = mouse.y;
		interactor.onInteractionEnd(this);

	}.bind(this);

	this.mouseMove = function (evt) {
		if(this.active){
			var mouse = getMousePosition(canvas, evt);
			this.xf = mouse.x;
			this.yf = mouse.y;
			interactor.onInteractionUpdate(this);
		}
	}.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.mouseDown, false);
	canvas.addEventListener('mousemove', this.mouseMove, false);
	canvas.addEventListener('mouseup', this.mouseUp, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
};