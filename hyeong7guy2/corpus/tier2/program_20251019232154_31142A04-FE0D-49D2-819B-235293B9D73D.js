function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        function f9(a10, a11) {
            return 1024;
        }
        Temporal[Symbol.toPrimitive] = f9;
        const t7 = Temporal.PlainTime;
        new t7(2.2250738585072014e-308, length, Temporal);
    }
}
try { new F3(Uint16Array, F3); } catch (e) {}
