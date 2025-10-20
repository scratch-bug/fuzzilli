const v3 = class {
}
function f4() {
    for (let i5 = 1;
        (() => {
            const v7 = [i5,i5,i5];
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                for (const v14 of v7) {
                }
            }
            ++i5;
            return i5 < 25000;
        })();
        ) {
    }
    return f4;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
