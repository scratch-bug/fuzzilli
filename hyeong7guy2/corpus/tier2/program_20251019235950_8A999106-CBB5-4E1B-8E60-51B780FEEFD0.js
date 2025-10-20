function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7) {
        function f8() {
            return a2;
        }
        const v9 = [693913.4712015034,-314050.5385797281];
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(a12, "constructor", { enumerable: true, value: f8 });
        }
        const v14 = new F10(v9);
        return v14;
    }
    new Worker(f5, { type: "function" });
}
new F0();
new F0();
