public class Main {
  public static void main(String[] args) {
    AbstractFactory flatShapeFactory = FactoryCreator.getFactory("GEOMETRY2D");
    AbstractFactory dimShapeFactory = FactoryCreator.getFactory("GEOMETRY3D");

    Geometry2D geometry1 = flatShapeFactory.getGeometry("CIRCLE");
    geometry1.draw();


    Geometry2D geometry2 = flatShapeFactory.getGeometry("RECTANGLE");
    geometry2.draw();
  }
}
