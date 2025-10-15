function f1() {
    function f2() {
        for (const v3 in "valueOf") {
        }
        return f1;
    }
    const v7 = new Worker(f2, { type: "function" });
    return v7;
}
class C8 {
    static {
        this.valueOf = f1;
        this <= this;
    }
}
