public class Geometry2DFactory extends AbstractFactory {
  @Override
  public Geometry2D getGeometry(String type) {
    if (type == null) {
      return null;
    }

    if(type.equalsIgnoreCase("RECTANGLE")) {
      return new Rectangle();
    } else if (type.equalsIgnoreCase("SQUARE")) {
      return new Square();
    } else if (type.equalsIgnoreCase("CIRCLE")) {
      return new Circle();
    }

    return null;
  }

  @Override
  public Geometry3D getGeometry(String type) {
    return null;
  }
}
