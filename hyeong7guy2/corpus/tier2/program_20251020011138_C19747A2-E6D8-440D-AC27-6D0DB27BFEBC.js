[65537,82244759,-1073741824,2054567201,1146211528,5];
function f3() {
    const v8 = new ArrayBuffer(3, { maxByteLength: 2615505747 });
    const v10 = new Float64Array(v8);
    v10.reverse();
    return f3;
}
({ construct: f3 }).construct();
new Float64Array(3873);
[-6.051445732434808,-2.220446049250313e-16,2.2250738585072014e-308];
class C18 {
    static get b() {
        return 775839066n;
    }
    constructor(a22, a23) {
    }
}
const v24 = new C18(Float64Array, 775839066n);
const v25 = new C18(3873, v24);
new C18(Float64Array, v25);
new C18(-2, v25);
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
}
const v31 = class extends F28 {
    constructor(a33, a34) {
        super();
        function F35(a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            function f39() {
                const v41 = eval();
                function f42(a43) {
                    const v46 = d8.debugger.enable;
                    v46(v46, v41, v46);
                }
                return f42;
            }
            Object.defineProperty(this, "toString", { get: f39 });
        }
        const v48 = new F35(v25, F28);
        class C49 {
            static [v48](a51, a52, a53) {
            }
        }
    }
}
new v31();
