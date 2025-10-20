for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = class extends Date {
            }
            const v19 = new v18();
            const v20 = v19.toTemporalInstant();
            Object.defineProperty(v20, "fractionalSecondDigits", { configurable: true, enumerable: true, value: F13 });
            v20.toString(v20);
        }
        new F13(a11, F9);
    } catch(e23) {
    }
}
new F9(F9, F9);
