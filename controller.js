function Pencil(ctx, drawing, canvas) {
	this.currentShape = 0;
	this.ctx = ctx;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd){
		var butRect = document.getElementById('butRect').checked;
		var spinnerWidth = document.getElementById('spinnerWidth').value;
		var colour = document.getElementById('colour').value;

		if(butRect){
			this.currentShape = new Rectangle(dnd.xi,dnd.yi,0,0,spinnerWidth,colour);
		}
		else{
			this.currentShape = new Line(dnd.xi,dnd.yi,dnd.xi,dnd.yi,spinnerWidth,colour);
		}

		// drawing.paint(ctx);
		// this.currentShape.paint(ctx);
		console.log("Start");
	}.bind(this);

	this.onInteractionEnd = function(dnd){

		this.currentShape.xf = dnd.xf;
		this.currentShape.yf = dnd.yf;
		drawing.shapes.push(this.currentShape);
		drawing.paint(ctx);

		// this.currentShape = 0;
		console.log("End");
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if(this.currentShape != 0){
			this.currentShape.clear(this.ctx);
			this.currentShape.xf = dnd.xf;
			this.currentShape.yf = dnd.yf;
			drawing.paint(this.ctx);
			this.currentShape.paint(this.ctx);
		}

		// if(this.currEditingMode == editingMode.rect){
		//
		// 	this.currentShape.rheight = (dnd.yf - dnd.yi);
		// 	this.currentShape.rwidth = (dnd.xf - dnd.xi);
		// }else{
		//
		// 	this.currentShape.xf = dnd.xf;
		// 	this.currentShape.yf = dnd.yf;
		// }
		// drawing.paint(ctx);
		// this.currentShape.paint(ctx);

		console.log("Update");
	}.bind(this);
};