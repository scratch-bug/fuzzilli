class C2 {
    static {
        this[Symbol.toPrimitive] = Symbol;
        Object.defineProperty(this, "usage", { writable: true, configurable: true, enumerable: true, value: this });
        try {
            ("object").localeCompare("object", "object", this);
        } catch(e6) {
        }
    }
}
