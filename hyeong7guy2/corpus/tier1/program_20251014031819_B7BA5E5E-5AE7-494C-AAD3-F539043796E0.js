class C1 {
    static {
        Object.defineProperty(this, "usage", { writable: true, configurable: true, enumerable: true, value: this });
        try {
            ("object").localeCompare("object", "object", this);
        } catch(e4) {
        }
    }
}
