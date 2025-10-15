function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f6(a7) {
            return a2;
        }
        this.onmessage = f6;
    }
    new Worker(f4, { type: "function" });
}
const v12 = new F0();
const t11 = v12.constructor;
const v14 = new t11();
const t13 = v14.constructor;
new t13();
