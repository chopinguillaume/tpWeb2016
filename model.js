
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
	this.shapes = new Array();

	this.getShapes = function() {
		return this.shapes;
	}.bind(this) ;

	this.addShape = function(shape) {
		this.shapes.push(shape);
	}.bind(this) ;
}

function Shape(xi,yi,xf,yf,linewidth,color) {
	this.xi = xi;
	this.yi = yi;
	this.xf = xf;
	this.yf = yf;
	this.linewidth = linewidth;
	this.color = color;
}

function Rectangle(xi, yi, xf, yf, linewidth, color){
	Shape.call(this, xi, yi, xf, yf, linewidth, color);
}
Rectangle.prototype = new Shape();

function Line(xi, yi, xf, yf, linewidth, color){
	Shape.call(this, xi, yi, xf, yf, linewidth, color);
}
Line.prototype = new Shape();