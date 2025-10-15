function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f10(a11) {
                return a11;
            }
            Object.defineProperty(Uint32Array, 2345058246, { enumerable: true, set: f10 });
            return f10;
        }
        this[Symbol.iterator] = f8;
        this.d = Uint8ClampedArray;
    }
    const v14 = new F4();
    const v15 = v14.d;
    try { new v15(v14); } catch (e) {}
}
new F0();
new F0(F0);
