function f0() {
    return f0;
}
const v1 = class extends f0 {
    static {
        new this();
    }
}
[3.0,1000.0];
