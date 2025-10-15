const v3 = class {
    ["bigint"](a5) {
        const v7 = new Map();
        return v7;
    }
}
const v8 = new v3();
new v3();
new v3();
v8[v8] = v3;
[v3,v3,v8,"Instance",v3];
for (const v12 of "undefined") {
}
let v13 = 0;
while (v13 < 3) {
    v13++;
}
new v3();
[257,-16];
[51783,-1097295568,2,1073741825,58272,536870887,-9223372036854775808,128,9223372036854775807];
new Uint32Array(64);
function f26() {
    return 128;
}
new WeakMap();
new Set();
function f53(a54) {
    return Uint32Array;
}
class C55 extends f53 {
    set f(a57) {
    }
}
function f81(a82) {
    return 3;
}
class C83 extends f81 {
    [10];
}
function F99(a101, a102, a103, a104) {
    if (!new.target) { throw 'must be called with new'; }
    try {
        Temporal.PlainDateTime.from(a102);
    } catch(e108) {
    }
}
const v126 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
gc();
let v168 = undefined;
function f169(a170) {
    return a170;
}
const v171 = class extends f169 {
    static {
    }
}
v168 = [];
const t56 = Array.prototype;
t56.length = 1;
const v179 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f180() {
    const v182 = WebAssembly.compile(v126);
    v182.constructor = f53;
    const v183 = await v182;
    const v185 = await WebAssembly.compile(v179);
    const t65 = WebAssembly.Instance;
    const v187 = new t65(v183);
    const v188 = WebAssembly.Instance;
    const v190 = v187.exports.exp;
    const v191 = %WasmStruct();
    for (let v192 = 0; v192 < 32; v192++) {
        v188["p" + v192] = v192;
    }
    const v195 = { imp: v190 };
    const v196 = { env: v195 };
    function F197(a199, a200) {
        if (!new.target) { throw 'must be called with new'; }
        function F201(a203, a204) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v205 = [F197,F197,F197,F197,F197];
        for (let i207 = 0;
            i207 < 20000;
            (() => {
                i207++;
                [F201] = v205;
            })()) {
        }
    }
    const v213 = new v188(v185, v196);
    const t90 = v213.exports.re_exp;
    t90(0, 1);
    return 65;
}
f180();
const v221 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
try {
const t0 = 1;
new t0();
} catch (e) {}
function f232() {
    return f232;
}
delete this.g;
class C242 {
    static set g(a244) {
    }
}
function f245() {
}
class C246 extends f245 {
}
const v272 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
async function f273() {
    const v276 = await WebAssembly.compile(v221);
    const v278 = await WebAssembly.compile(v272);
    const t116 = WebAssembly.Instance;
    const v280 = new t116(v276);
    const v281 = WebAssembly.Instance;
    try {
    } finally {
    }
    const v287 = {
        valueOf() {
            f273();
            %PrepareFunctionForOptimization(f273);
            f273();
            f273();
            %OptimizeFunctionOnNextCall(f273);
            f273();
            return 127;
        },
    };
    const v289 = v280.exports.exp;
    const v290 = { imp: v289 };
    const v292 = new v281(v278, { env: v290 });
    const v294 = v292.exports.re_exp;
    v294(v294, WebAssembly);
    return 110;
}
f273();
