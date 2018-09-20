class Akku {
  constructor(cap) {
    this.cap = cap;
  }
}

class Price {
  constructor(value) {
    this.value = value;
  }
}

class CPU {
  constructor(model) {
    this.model = model;
  }
}

class Macbook {}

class Macbook15Builder {
  constructor() {
    this.build = this.build.bind(this);
  }

  build() {
    const macbook = new Macbook();

    macbook.akku = new Akku(7200);
    macbook.price = new Price(2700);
    macbook.cpu = new CPU("i7");

    return macbook;
  }
}

class MacbookAirBuilder {
  constructor() {
    this.build = this.build.bind(this);
  }

  build() {
    const macbook = new Macbook();

    macbook.akku = new Akku(4200);
    macbook.price = new Price(1200);
    macbook.cpu = new CPU("i5");

    return macbook;
  }
}

class MacbookBuilder {
  constructor() {
    this.build = this.build.bind(this);
  }

  build(builder) {
    return builder.build();
  }
}

const builder1 = new Macbook15Builder();
const builder2 = new MacbookAirBuilder();

const director = new MacbookBuilder();

const macbook15 = director.build(builder1);
const macbookAir = director.build(builder2);

console.log(macbook15); // { akku: ..., ... }
console.log(macbookAir); // { akku: ..., ... }
