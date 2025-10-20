const v2 = ("10000").normalize("NFC");
const v3 = class {
    n(a5) {
        Reflect.construct(a5, [Reflect,Reflect], v2);
        return Reflect;
    }
}
const v9 = new v3();
try { v9.constructor(); } catch (e) {}
const v12 = Symbol.iterator;
const v21 = {
    [v12]() {
        let v14 = 10;
        const v20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                return { done: v18, value: v14 };
            },
        };
        return v20;
    },
};
[v2,"NFC",v21,"10000"];
class C24 extends v3 {
    static set d(a26) {
    }
    ["10000"] = "NFC";
    ["NFC"](a28, a29) {
        return v2;
    }
}
C24.a = C24;
new C24();
const v33 = new Int16Array(65);
v33.BYTES_PER_ELEMENT;
const v35 = [-988.1210532502116,-528225.448451255,-7.017990679657562e+307,0.09447722074299258,0.23783320816225184,-3.0];
function f36() {
    return v35;
}
128 + 128;
const v42 = new Uint32Array(128);
try { v42.toSorted(128); } catch (e) {}
function f44() {
    return v42;
}
function F45(a47, a48, a49, a50) {
    if (!new.target) { throw 'must be called with new'; }
    !a49;
    this.e = a49;
    this.d = a50;
    this.a = false;
}
const v52 = new F45(-63266n, Uint32Array, false, 128);
const v53 = new F45(128, v35, v42, -63266n);
v53.b = v53;
function F54() {
    if (!new.target) { throw 'must be called with new'; }
    const v56 = this?.constructor;
    try { new v56(); } catch (e) {}
    const v58 = {};
    for (let v59 = 0; v59 < 100; v59++) {
        v59 >>> v59;
    }
}
const v61 = new F54();
function f62() {
    return v61;
}
let v63 = 16;
v63--;
const t70 = "bigint";
t70[1] = "bigint";
const v67 = Symbol.iterator;
const v76 = {
    [v67]() {
        let v69 = 10;
        const v75 = {
            next() {
                v69--;
                const v73 = v69 == 0;
                return { done: v73, value: v69 };
            },
        };
        return v75;
    },
};
function F77(a79, a80) {
    if (!new.target) { throw 'must be called with new'; }
    a79.b = a79;
    const v82 = {
        valueOf() {
            return -34038;
        },
    };
    this.f = v67;
    this.f = a80;
}
new F77(v52, Uint32Array);
const v84 = new F77(v63, "bigint");
const v85 = v84?.constructor;
try { new v85(v84, -63266n); } catch (e) {}
new F77(v76, v84);
let v88 = 257;
v88++;
gc.length = gc;
const v92 = { execution: "async" };
v92.flavor = Symbol;
gc(v92);
function f94() {
}
try { WebAssembly.validate(v92); } catch (e) {}
const v97 = WebAssembly.instantiateStreaming();
function f98(a99, a100) {
    return a100;
    function F101(a103, a104) {
        if (!new.target) { throw 'must be called with new'; }
        const v105 = a103 > a104;
        try {
            new F101(a103, v105);
        } catch(e107) {
        }
    }
    return v92;
}
Object.defineProperty(v97, "constructor", { writable: true, configurable: true, enumerable: true, value: f98 });
v97.catch(f94);
function f109(a110) {
    v88 >= 100000;
    for (let i114 = 0;
        (() => {
            v63 < 20000;
            try { this.postMessage(this); } catch (e) {}
            function f120() {
                return f120;
            }
            const v121 = i114 < 20000;
            v121 || v121;
            return v121;
        })();
        ) {
    }
    const v129 = {
        next() {
            return { done: 10 };
        },
    };
    function f130() {
    }
    f130[Symbol] = Symbol;
}
function f131() {
    return f131;
}
function f132(a133, a134) {
    return v33;
}
f131.constructor = f132;
function f136(a137, a138, a139) {
    a137 ?? a137;
    a139 ?? a139;
    const v149 = {
        construct(a143, a144) {
            a144.name;
            const v147 = a144.prototype?.__lookupGetter__;
            try { new v147(a139); } catch (e) {}
            f136.prototype = a138;
            return a144;
        },
    };
    v149.construct(a139, f136);
    return a138;
}
f136();
%OptimizeMaglevOnNextCall(f136);
try { ("function").isWellFormed(); } catch (e) {}
function f154() {
    return f154;
}
class C155 extends f154 {
}
C155.c = C155;
const v157 = new Worker(f109, { type: "function" });
const v158 = v157?.constructor;
try { new v158(); } catch (e) {}
