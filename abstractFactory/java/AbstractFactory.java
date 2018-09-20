public abstract class AbstractFactory {
  abstract Geometry2D get2DGeometry(String shape);
  abstract Geometry3D get3DGeometry(String shape);
}
