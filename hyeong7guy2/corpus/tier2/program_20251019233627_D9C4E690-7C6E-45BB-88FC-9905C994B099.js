function f0(a1) {
    const v2 = `
        function F3(a5, a6) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    return v2;
}
Object.defineProperty(f0, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f0 });
const t9 = Intl.NumberFormat;
t9().format(f0);
