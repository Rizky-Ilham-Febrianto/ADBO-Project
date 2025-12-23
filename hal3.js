class Guitar {
    constructor(serialNumber, price, builder, model, type, backWood, topWood) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
    }

    getSerialNumber() {
        return this.serialNumber;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getBuilder() {
        return this.builder;
    }

    getModel() {
        return this.model;
    }

    getType() {
        return this.type;
    }

    getBackWood() {
        return this.backWood;
    }

    getTopWood() {
        return this.topWood;
    }
}

class Inventory {
    constructor() {
        this.guitars = [];
    }

    addGuitar(serialNumber, price, builder, model, type, backWood, topWood) {
        const guitar = new Guitar(
            serialNumber,
            price,
            builder,
            model,
            type,
            backWood,
            topWood
        );
        this.guitars.push(guitar);
    }

    getGuitar(serialNumber) {
        for (let guitar of this.guitars) {
            if (guitar.getSerialNumber() === serialNumber) {
                return guitar;
            }
        }
        return null;
    }

    search(searchGuitar) {
        for (let guitar of this.guitars) {
            if (
                guitar.getBuilder() === searchGuitar.getBuilder() &&
                guitar.getModel() === searchGuitar.getModel() &&
                guitar.getType() === searchGuitar.getType() &&
                guitar.getBackWood() === searchGuitar.getBackWood() &&
                guitar.getTopWood() === searchGuitar.getTopWood()
            ) {
                return guitar;
            }
        }
        return null;
    }
}

const inventory = new Inventory();

inventory.addGuitar(
    "SN001",
    12000000,
    "Fender",
    "Stratocaster",
    "Electric",
    "Alder",
    "Maple"
);

const guitarCari = new Guitar(
    "",
    0,
    "Fender",
    "Stratocaster",
    "Electric",
    "Alder",
    "Maple"
);

const hasil = inventory.search(guitarCari);

if (hasil) {
    console.log("Gitar ditemukan:", hasil.getSerialNumber());
} else {
    console.log("Gitar tidak ditemukan");
}