public class Main {
  private MacbookBuilder builder;

  public Main(final MacbookBuilder builder) {
    this.builder = builder;
  }

  public Macbook construct() {
    return builder.setModel("2017")
                  .setColor("gold")
                  .build();
  }

  public static void main(final String[], arguments) {
    final MacbookBuilder builder = new MacbookBuilderImpl();

    final Main macbookBuildDirector = new Main(builder);

    System.out.println(macbookBuildDirector.construct());
  }
}
