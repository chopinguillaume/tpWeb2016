
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx){
	ctx.lineWidth = this.linewidth;
	ctx.strokeStyle = this.color;

	ctx.rect(this.xi,this.yi,this.xf-this.xi,this.yf-this.yi);
	ctx.stroke();
};

Line.prototype.paint = function(ctx){
	ctx.lineWidth = this.linewidth;
	ctx.strokeStyle = this.color;

	ctx.beginPath();
	ctx.moveTo(this.xi, this.yi);
	ctx.lineTo(this.xf, this.yf);
	ctx.stroke();
};

Drawing.prototype.paint = function(ctx){
	// console.log(this.shapes.length);
	ctx.fillStyle = '#F0F0F0';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	this.shapes.forEach(function (elt) {
		// console.log(elt);
		elt.paint(ctx);
	});
};

Shape.prototype.clear = function (ctx) {
	canvas.getContext('2d').fillStyle = '#F0F0F0'; // set canvas' background color
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}