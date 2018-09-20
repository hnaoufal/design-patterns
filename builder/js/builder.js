const Akku = (function() {
  function Akku(cap) {
    this.cap = cap;
  }
  return Akku;
})();

const Price = (function() {
  function Price(value) {
    this.value = value;
  }
  return Price;
})();

const CPU = (function() {
  function CPU(model) {
    this.model = model;
  }
  return CPU;
})();

const Macbook = (function() {
  function Macbook() {}
  return Macbook;
})();

const Macbook15Builder = (function() {
  function Macbook15Builder() {}

  Macbook15Builder.prototype.build = function() {
    const macbook = new Macbook();

    macbook.akku = new Akku(7200);
    macbook.price = new Price(2700);
    macbook.cpu = new CPU("i7");

    return macbook;
  };

  return Macbook15Builder;
})();

const MacbookAirBuilder = (function() {
  function MacbookAirBuilder() {}

  MacbookAirBuilder.prototype.build = function() {
    const macbook = new Macbook();

    macbook.akku = new Akku(4200);
    macbook.price = new Price(1200);
    macbook.cpu = new CPU("i5");

    return macbook;
  };

  return MacbookAirBuilder;
})();

const MacbookBuilder = (function() {
  function MacbookBuilder() {}

  MacbookBuilder.prototype.build = function(builder) {
    return builder.build();
  };

  return MacbookBuilder;
})();

const builder1 = new Macbook15Builder();
const builder2 = new MacbookAirBuilder();

const director = new MacbookBuilder();

const macbook15 = director.build(builder1);
const macbookAir = director.build(builder2);

console.log(macbook15); // { akku: ..., ... }
console.log(macbookAir); // { akku: ..., ... }
