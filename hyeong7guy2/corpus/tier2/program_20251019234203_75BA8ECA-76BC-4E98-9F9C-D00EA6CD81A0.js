Symbol.iterator;
class C6 {
}
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12, a13, a14) {
        const v16 = new Map();
        for (let i18 = 0;
            i18 < 25000;
            (() => {
                i18++;
                v16.get(i18);
                function f24(a25, a26, a27, a28) {
                }
            })()) {
        }
        function f30(a31, a32) {
            function f33(a34, a35) {
                try { a35.bind(f11); } catch (e) {}
                for (let v37 = 0; v37 < 5; v37++) {
                }
            }
            return f33;
        }
        try { f30(a13, Int16Array); } catch (e) {}
        Symbol.toString = f30;
        536870912n >> 536870912n;
        function F41(a43, a44) {
            if (!new.target) { throw 'must be called with new'; }
            function f45() {
                function f46(a47) {
                    a47 ?? a47;
                    const v49 = Symbol.toString();
                    v49(v49, f11);
                    v49(Symbol, f45, 536870912n);
                }
                return f46;
            }
            Object.defineProperty(this, "toString", { get: f45 });
        }
        const v53 = {};
        new SharedArrayBuffer(111);
        try { new F41(a14, Symbol); } catch (e) {}
        const v57 = new F41();
        v57.toString();
    }
    const v59 = f11();
    v59 ?? v59;
    %OptimizeFunctionOnNextCall(f11);
}
new F7();
const v62 = new F7();
const t52 = v62.constructor;
new t52(C6, Uint16Array);
const v65 = new F7();
const t55 = v65.constructor;
new t55(C6);
