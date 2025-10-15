function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class {
}
function f8() {
    for (let i9 = 3;
        (() => {
            const v11 = F1;
            switch (v11) {
                case Symbol:
                    break;
            }
            const v12 = i9 < 25000;
            eval(f8);
            return v12;
        })();
        i9++) {
    }
    return f8;
}
Object.defineProperty(v7, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f8 });
try { new Int32Array(v7); } catch (e) {}
