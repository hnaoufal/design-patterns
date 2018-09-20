public class FactoryCreator {
  public static AbstractFactory getFactory(String choice) {
    if(choice.equalsIgnoreCase("GEOMETRY2D")) {
      return new Geometry2DFactory();
    } else if (choice.equalsIgnoreCase("GEOMETRY3D")) {
      return new Geometry3DFactory();
    }

    return null;
  }
}
