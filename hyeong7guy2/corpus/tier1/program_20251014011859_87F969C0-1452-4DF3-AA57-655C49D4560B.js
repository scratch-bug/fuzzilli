function F0() {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "h", { value: this });
    this.h = -65536;
    this.a = -65536;
    this.c = -65536;
}
function f3(a4, a5) {
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F6;
}
const v11 = Symbol.iterator;
F0[v11] = f3;
const v12 = new F0();
const v13 = new F0();
let v14 = -0.0;
const v15 = v14++;
class C16 extends F0 {
    #e = F0;
    static {
        function f18() {
            return v12;
        }
    }
}
const v19 = new C16();
const v20 = v19?.toString;
let v21;
try { v21 = new v20(); } catch (e) {}
const v22 = new C16();
const v23 = new C16();
const v24 = new C16();
class C25 extends F0 {
    get d() {
        return this;
    }
    static [v23] = v13;
    static #p(a28, a29, a30) {
        return a28;
    }
}
const v31 = new C25();
Object.defineProperty(v31, "length", { enumerable: true, value: v20 });
new C25();
const v33 = new C25();
function f34(a35) {
    return v13;
}
class C36 extends f34 {
    #a;
}
v33.a = v33;
const v37 = new C25();
function f39(a40) {
    try { new Uint32Array(F0, Uint32Array, F0); } catch (e) {}
    const v43 = new Uint32Array(12234);
    v43[11858];
    function f45() {
        return Uint32Array;
    }
    const v46 = [-1949062951,-809467572,1,-29760,1367634515,47021,-1523345805];
    v46.constructor = f3;
    try { v46.flat(); } catch (e) {}
    new f45(...v46, ...v46, ...v43);
}
function F49(a51) {
    if (!new.target) { throw 'must be called with new'; }
}
function f52() {
    function f53(a54, a55) {
        const v62 = {
            get h() {
                try { this.m(); } catch (e) {}
                const v59 = new C25();
                try { v11["trimRight"](a55, v11); } catch (e) {}
                return v59;
            },
            __proto__: v31,
        };
        return v62;
    }
    f53(v31, v37);
    f53(v21, v33);
    f53(v24, v33);
    f53(v24, v37);
    f53(v21, v33);
    f53(v19, v31);
    f53(v22, v37);
    f53(v21, v20);
    return v15;
}
F49[Symbol.toPrimitive] = f52;
const v74 = Symbol.toPrimitive;
Symbol.for(v74.description);
F49[v74] = f39;
const v83 = {
    o(a79, a80) {
        a79 ?? a79;
        a80 ?? a80;
        super[F49] = a80;
        return Symbol;
    },
};
const v84 = v83.o();
const v85 = class {
}
try { v85.apply(v84, v31); } catch (e) {}
