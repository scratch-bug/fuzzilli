class C1 {
    static {
        this.collation = this;
        try {
            ("object").localeCompare("object", "object", this);
        } catch(e4) {
        }
    }
}
