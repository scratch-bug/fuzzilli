function f0() {
}
new Float32Array(256);
function f6() {
    return f0;
}
const v9 = Symbol.iterator;
const v18 = {
    [v9]() {
        let v11 = 10;
        const v17 = {
            next() {
                v11--;
                const v15 = v11 == 0;
                return { done: v15, value: v11 };
            },
        };
        return v17;
    },
};
new Uint32Array(1000);
const v24 = new Array(127);
class C25 {
    #o(a27) {
        v24.length = -6;
        function f29(a30, a31, a32, a33) {
            this[Symbol.asyncIterator] = f29;
        }
        new Promise(f29);
        return Array;
    }
    o(a40, a41) {
        return a41;
    }
}
new C25();
const v43 = new C25();
const v44 = [127,127,C25];
const v45 = [2.2250738585072014e-308,-1000000.0,-1000000000.0,-13536.709902805625];
function F47(a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a49;
    this.h = a49;
    v45.join(a50, ...v44, 536870912, a50);
    v24["shift"](..."shift", ...v44, v24, F47);
    let v55 = Array.bind(this);
    this.d = v43;
}
new F47(v44, v24, v45);
class C59 {
}
const v97 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
const t52 = WebAssembly.Module;
const v100 = new t52(v97);
function f101() {
    return 0;
}
const v102 = { f: f101 };
const v103 = { m: v102 };
const v104 = %WasmArray();
const t60 = WebAssembly.Instance;
new t60(v100, v103);
new Float32Array();
function f110(a111) {
}
class C112 extends f110 {
}
function f114() {
}
WebAssembly.instantiateStreaming().catch(f114);
gc();
function f120() {
    return NaN;
}
class C122 {
}
let v123 = false;
function f124(a125) {
    const v126 = !a125;
    return;
    function f127() {
    }
    const v132 = {
        start(a129) {
            const generator = f127;
            [9n,v126];
        },
    };
    function f133() {
    }
    WebAssembly.instantiate(f133);
}
for (let i137 = 0;
    i137 < 25000;
    (() => {
        i137++;
        Uint8Array.g = Uint8Array;
    })()) {
    if (i137 > 24999) {
        v123 = true;
    }
    f124(v123);
}
