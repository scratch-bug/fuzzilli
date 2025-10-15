function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f7(a8) {
        }
        this.onmessage = f7;
    }
    new Worker(f5, { type: "function" });
}
const v13 = new F1();
const t10 = v13.constructor;
new t10(Uint16Array);
