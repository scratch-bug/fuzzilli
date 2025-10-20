function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -13340;
}
new F1();
new F1();
new F1();
new F1();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11(a12, a13, a14) {
        function F16(a18, a19, a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22() {
                return a14;
            }
            function f23(a24) {
                const v25 = [f11,f11,f11,f11];
                try { v25.findIndex(); } catch (e) {}
                return a14;
            }
            Object.defineProperty(this, "e", { get: f22, set: f23 });
            this.e = -1;
        }
        new F16(F7, a14, -1, a10);
        return a12;
    }
    f11(f11, this, a10);
    %OptimizeFunctionOnNextCall(f11);
}
let v29 = 14857;
try {
    let v50 = 7;
    v50--;
    let v53 = 1;
    v53--;
    const v60 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,123,0,3,2,1,0,v50,5,v53,1,102,0,0]);
    const t37 = WebAssembly.Module;
    new t37(v60);
} catch(e64) {
}
v29--;
let v68 = 0;
v68--;
Temporal.day = 3.0;
const t45 = Temporal.PlainYearMonth;
new t45(3.0, 3.0);
Float32Array.d = Float32Array;
const v74 = new Float32Array(1894);
v74[1219] = v74;
const v77 = new Int8Array(4096);
Array(1048576);
const v83 = new Uint32Array();
let v84 = 108055911;
for (let i = 0; i < 5; i++) {
    ({"byteLength":v84,...v84} = v83);
}
const v87 = [];
for (let i88 = v87; i88 < 25000; ++i88) {
}
const v94 = new Date();
function F95(a97, a98, a99, a100) {
    if (!new.target) { throw 'must be called with new'; }
    return ([37957.07053813047,-1000000.0,9.703057529439196e+307,4.0]).indexOf(1048576, this);
    const v105 = class extends Set {
    }
    new Uint16Array([v105]);
    a97.setHours(4294967297, 3, 3, 4294967297);
}
new F95(v94);
const v110 = v77?.findLastIndex;
try { new v110(v74); } catch (e) {}
function F112(a114, a115, a116) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.propertyIsEnumerable(a116); } catch (e) {}
    try { new a115(v77, -13340, -13340); } catch (e) {}
    a116.length;
    const v121 = F112.constructor.call();
    try { v121(); } catch (e) {}
}
function f123() {
    with (d8) {
        const v126 = test?.FastCAPI;
        try { new v126(); } catch (e) {}
        const v128 = test.FastCAPI;
        const v129 = new v128();
        try { v129.sum_uint64_as_number(v128); } catch (e) {}
        v129.reset_counts();
    }
    const v135 = new Date(1073741824);
    for (let i137 = 0;
        i137 < 10000;
        (() => {
            ++i137;
            v135.b ^= 1073741824;
            const v143 = {
                valueOf() {
                    return i137;
                },
            };
            let v144 = Symbol.bind();
        })()) {
    }
}
F112.constructor = f123;
