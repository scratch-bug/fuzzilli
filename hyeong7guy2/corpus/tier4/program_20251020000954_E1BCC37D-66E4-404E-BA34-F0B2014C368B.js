class C2 {
    static {
        this.localeMatcher = null;
        try {
            ("object").localeCompare("object", "object", this);
        } catch(e5) {
        }
    }
}
