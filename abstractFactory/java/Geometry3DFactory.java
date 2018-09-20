public class Geometry3DFactory extends AbstractFactory {
  @Override
  public Geometry3D getGeometry(String type) {
    if (type == null) {
      return null;
    }

    if(type.equalsIgnoreCase("HYPERRECTANGLE")) {
      return new HyperRectangle();
    } else if (type.equalsIgnoreCase("SPHERE")) {
      return new Sphere();
    } else if (type.equalsIgnoreCase("QUBE")) {
      return new Qube();
    }

    return null;
  }

  @Override
  public Geometry2D getGeometry(String type) {
    return null;
  }
}
