const v1 = class {
}
function f2() {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        const v5 = [-631.2779217677911];
        function F6(a8, a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                return a8;
            }
            const v13 = `
                try {
                    const v15 = class extends a11 {
                    }
                    \`-63824\`;
                } catch(e17) {
                    new f12(e17, Uint8ClampedArray, ...v5, ...v13);
                }
            `;
            eval(v13);
        }
        new F6();
    }
    new F3();
    return F3;
}
Object.defineProperty(v1, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f2 });
try { new Int32Array(v1); } catch (e) {}
