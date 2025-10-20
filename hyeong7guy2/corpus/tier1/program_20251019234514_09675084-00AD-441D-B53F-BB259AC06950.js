function f0() {
}
const v2 = new Set();
function f3() {
    return v2;
}
Symbol.unscopables = Symbol;
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        let v7 = 10;
        const v13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                return { done: v11, value: v7 };
            },
        };
        return v13;
    },
};
class C17 extends f0 {
    static #m(a19, a20) {
        try {
            v2.keys();
        } catch(e22) {
        }
        return Object;
    }
}
C17.d = C17;
new C17();
const v25 = new C17();
const v26 = v25?.constructor;
try { new v26(); } catch (e) {}
new C17();
new C17();
2913 / 2913;
Int8Array.name;
const v34 = new Int8Array(2913);
v34[646] = v34;
const v35 = [268435439,-9223372036854775807,-1953415435,10000,-268435456,-65537,-128,-1525227024];
try { v35.concat(null); } catch (e) {}
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    const v42 = [];
    function f43(a44, a45) {
        for (const v46 in v42) {
            try { v46(); } catch (e) {}
        }
        return f43;
    }
    v42.constructor = f43;
    function F48(a50, a51) {
        if (!new.target) { throw 'must be called with new'; }
        function f52() {
            function f53(a54) {
                const t57 = v42.constructor;
                t57();
                return a51;
            }
            f53();
            %OptimizeMaglevOnNextCall(f53);
            return f53;
        }
        Object.defineProperty(this, "toString", { get: f52 });
    }
    const v58 = new F48();
    class C59 {
        static [v58](a61, a62, a63) {
        }
    }
    a40 ?? a40;
    function f65() {
        function f66(a67) {
            let v68 = -1098098658;
            v68 | v68;
            Int32Array.g = Int32Array;
            let v72;
            try { v72 = ("2147483647").fontsize(f65); } catch (e) {}
            try { v72.replace(f66, v14); } catch (e) {}
            function F75(a77, a78) {
                if (!new.target) { throw 'must be called with new'; }
                const v79 = this?.constructor;
                try { new v79(Int32Array, this); } catch (e) {}
                a78 !== a78;
                this.e = a78;
            }
            F75.h = F75;
            try { new F75(f66, f0); } catch (e) {}
            const v83 = this[4];
            v83 ?? v83;
            v83 ?? v83;
            ~7;
            7 ^ 7;
            const v89 = v83 | 7;
            v89 - v89;
            const t96 = -3612;
            t96.b = v35;
            const v91 = new F75();
            v91.b = v91;
            let v92 = arguments;
            ({"b":v92,"e":v68,...Int32Array} = -3612);
        }
        f66.length;
        f66(F37);
        f66(f65);
        %OptimizeMaglevOnNextCall(f66);
        return f66;
    }
    Object.defineProperty(this, "toString", { get: f65 });
}
try { F37.bind(null); } catch (e) {}
const v97 = new F37();
class C98 {
    static [v97](a100, a101, a102) {
    }
}
try { C98.call(F37); } catch (e) {}
