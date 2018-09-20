interface MacbookBuilder {
  // building methode (independent from the product)
  Macbook build();

  MacbookBuilder setColor(final String color);
  MacbookBuilder setModel(final String model);
}
