class MacbookBuilderImpl implements MacbookBuilder {
  private Macbook macbook;

  public MacbookBuilderImpl() {
    macbook = new Macbook();
  }

  @override
  public Macbook build() {
    return macbook;
  }

  @Override
  public MacbookBuilder setColor(final String color) {
    macbook.setColor(color);
    return this;
  }

  @Override
  public MacbookBuilder setModel(final String model) {
    macbook.setModel(model);
    return this;
  }
}
