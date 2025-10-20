[];
class C1 {
    #n() {
        let v3 = 0;
        while (v3) {
            v3++;
        }
        return v3;
    }
}
new C1();
const v8 = class extends C1 {
    static {
        try {
            new C1();
        } catch(e11) {
        }
    }
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    function f19() {
        function f20(a21) {
        }
        const v22 = %WasmStruct();
        const v28 = {
            [Symbol]() {
                const v27 = {
                    next() {
                        const v26 = {};
                    },
                };
            },
        };
    }
}
new v8();
new v8();
for (let i33 = 0; i33 < 25000; ++i33) {
    1497827324 instanceof Set;
}
const v43 = new v8();
const v45 = Symbol.iterator;
const v47 = {
    [v45]() {
    },
};
new SharedArrayBuffer(127, { maxByteLength: 536870912 });
const v83 = new BigUint64Array();
v83.indexOf();
const v88 = {};
for (let i90 = 0; i90; i90++) {
    i90 % 2;
    v88.h = v88;
    v88.f = v88;
    v88.toISOString = v43;
}
function F101(a103) {
    if (!new.target) { throw 'must be called with new'; }
}
const v104 = class extends F101 {
    resolve(a106, a107, a108) {
    }
}
const v112 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
const v120 = class {
}
const v139 = { execution: "sync" };
v139.type = v139;
gc(v139);
const v160 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,11,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f161() {
    const v163 = WebAssembly.compile(v112);
    const v164 = WebAssembly.compile(v160);
    const v166 = Math.floor(0);
    const v167 = await v164;
    const v168 = WebAssembly.Instance;
    function f169(a170) {
        function f171(a172) {
        }
        f171.arguments;
    }
    f169(v166);
    return f169;
    const v175 = new v168(v163);
    const v176 = WebAssembly.Instance;
    const v178 = v175.exports.exp;
    const v179 = { imp: v178 };
    const v181 = new v176(v167, { env: v179 });
    const v182 = v181.exports;
    const v183 = WebAssembly.promising(v182);
    v183(v183, v182);
    return 1;
}
for (let v186 = 0; v186 < 42; v186++) {
    f161();
}
