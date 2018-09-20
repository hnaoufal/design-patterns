const GType = {
  CIRCLE: "CIRCLE",
  SQUARE: "SQUARE",
  QUBE: "QUBE",
  SPHERE: "SPHERE"
};

class Qube {
  draw() {
    console.log("Draw Qube!");
  }
}

class Sphere {
  draw() {
    console.log("Draw Sphere!");
  }
}

class Square {
  draw() {
    console.log("Draw Square!");
  }
}

class Circle {
  draw() {
    console.log("Draw Circle!");
  }
}

// Concrete Class

class Geometry2DFactory {
  getGeometry(shape) {
    switch (shape) {
      case GType.CIRCLE:
        return new Circle();
      case GType.SQUARE:
        return new Square();
      default:
        break;
    }

    return null;
  }
}

class Geometry3DFactory {
  getGeometry(shape) {
    switch (shape) {
      case GType.SPHERE:
        return new SPHERE();
      case GType.QUBE:
        return new Qube();
      default:
        break;
    }

    return null;
  }
}

// Abstract Class

class AbstractFactory {
  constructor(abstractFactory) {
    this.abstractFactory = abstractFactory;

    this.drawGeometry = this.drawGeometry.bind(this);
  }

  drawGeometry(shape) {
    this.abstractFactory.getGeometry(shape).draw();
  }
}

const AbstractFactory1 = new AbstractFactory(new Geometry2DFactory());
AbstractFactory1.drawGeometry(GType.CIRCLE);

const AbstractFactory2 = new AbstractFactory(new Geometry3DFactory());
AbstractFactory2.drawGeometry(GType.QUBE);
