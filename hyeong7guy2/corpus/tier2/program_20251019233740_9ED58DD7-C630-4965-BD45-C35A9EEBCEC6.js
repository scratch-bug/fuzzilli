const v3 = class {
}
function f4() {
    for (let i5 = 1;
        (() => {
            const t0 = {};
            t0.c = i5;
            const t2 = {};
            t2.g = i5;
            const v8 = {};
            v8.b = v8;
            v8.d = Symbol;
            const t7 = {};
            t7.h = Symbol;
            ++i5;
            return i5 < 25000;
        })();
        ) {
    }
    return 1;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
