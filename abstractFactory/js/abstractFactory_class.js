const GType = {
  CIRCLE: "CIRCLE",
  SQUARE: "SQUARE",
  QUBE: "QUBE",
  SPHERE: "SPHERE"
};

const Qube = (function() {
  function Qube() {}

  Qube.prototype.draw = function() {
    console.log("Draw Qube!");
  };

  return Qube;
})();

const Sphere = (function() {
  function Sphere() {}

  Sphere.prototype.draw = function() {
    console.log("Draw Sphere!");
  };

  return Sphere;
})();

const Square = (function() {
  function Square() {}

  Square.prototype.draw = function() {
    console.log("Draw Square!");
  };

  return Square;
})();

const Circle = (function() {
  function Circle() {}

  Circle.prototype.draw = function() {
    console.log("Draw Circle!");
  };

  return Circle;
})();

// Concrete Class

const Geometry2DFactory = (function() {
  function Geometry2DFactory() {}

  Geometry2DFactory.prototype.getGeometry = function(shape) {
    switch (shape) {
      case GType.CIRCLE:
        return new Circle();
      default:
        break;
    }

    return new Square();
  };
  return Geometry2DFactory;
})();

const Geometry3DFactory = (function() {
  function Geometry3DFactory() {}

  Geometry3DFactory.prototype.getGeometry = function(shape) {
    switch (shape) {
      case GType.SPHERE:
        return new SPHERE();
      default:
        break;
    }

    return new Qube();
  };

  return Geometry3DFactory;
})();

// Abstract Class

const AbstractFactory = (function() {
  function AbstractFactory(abstractFactory) {
    this.abstractFactory = abstractFactory;
  }

  AbstractFactory.prototype.drawGeometry = function(shape) {
    this.abstractFactory.getGeometry(shape).draw();
  };

  return AbstractFactory;
})();

const AbstractFactory1 = new AbstractFactory(new Geometry2DFactory());
AbstractFactory1.drawGeometry(GType.CIRCLE);

const AbstractFactory2 = new AbstractFactory(new Geometry3DFactory());
AbstractFactory2.drawGeometry(GType.CIRCLE);
