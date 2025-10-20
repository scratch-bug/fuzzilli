function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Temporal.PlainTime;
    const v6 = new t2(a2, a2, a2, a3, a3, a3);
    function f7() {
        function f8() {
            return f8;
        }
        return f8;
    }
    v6[Symbol.toPrimitive] = f7;
    Object.defineProperty(v6, "fractionalSecondDigits", { writable: true, value: v6 });
    v6.toString(v6);
}
try { new F0(); } catch (e) {}
