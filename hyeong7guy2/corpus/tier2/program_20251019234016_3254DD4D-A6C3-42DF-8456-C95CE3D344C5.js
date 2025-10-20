function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4294967295;
    this.g = 4294967295;
}
const v3 = new F0();
const v4 = new F0();
const v6 = Symbol.iterator;
const v15 = {
    [v6]() {
        let v8 = 10;
        const v14 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                return { done: v12, value: v8 };
            },
        };
        return v14;
    },
};
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
    this.a = a19;
    this.f = v4;
}
new F16(F0, F16);
const v21 = new F16(v4, v3);
new F16(v21, v21);
new F16(v21, v21);
/\u{12345}\u{23456}?/m;
function f28() {
    const v31 = new BigUint64Array(2559);
    for (const v32 of v31) {
        new SharedArrayBuffer(1770, { maxByteLength: 536870889 });
    }
    return 750;
}
f28.valueOf = f28;
class C38 extends f28 {
}
function f39() {
    function F41(a43, a44) {
        if (!new.target) { throw 'must be called with new'; }
        function f45() {
            function f46(a47) {
                function f50(a51) {
                    for (let v52 = 0; v52 < 5; v52++) {
                    }
                    const v53 = `string${536870912n}undefined`;
                    const v54 = [-9223372036854775808];
                    try { v54.forEach(0); } catch (e) {}
                    v53.charAt(0);
                    return v53;
                }
                const v57 = f50();
                f50();
                const v59 = [];
                v59[11] = Infinity;
                const v60 = v59[4];
                function f62() {
                    class C63 {
                    }
                    return v57;
                }
                f62();
                return v60 >>> 7;
            }
            f46(f46());
            %OptimizeMaglevOnNextCall(f46);
            return f46;
        }
        Object.defineProperty(this, "toString", { get: f45 });
    }
    const v68 = new F41(Infinity, F41);
    class C69 {
        static [v68](a71, a72, a73) {
        }
    }
    return 750;
}
f39.maximum = 2624;
Object.defineProperty(f39, "initial", { value: C38 });
const t84 = WebAssembly.Memory;
const v76 = new t84(f39);
v76.toResizableBuffer(v76, v76);
/(a)\1/sygmvi;
