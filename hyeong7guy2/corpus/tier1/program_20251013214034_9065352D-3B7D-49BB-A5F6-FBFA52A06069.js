[5,4,1139672580,7,4294967296,536870889,64];
new Int32Array(237);
new WeakMap();
/S(\1a)foo(?<=bar)bazo/i;
new Date();
let v10 = false;
class C11 {
}
function f13(a14, a15) {
    if (v10) {
        const v16 = {};
        const v19 = new Uint16Array(3498);
        v19[1073741823];
    }
    const v21 = new a14(...a15);
    return v21;
}
const v23 = new Proxy(C11, { construct: f13 });
const P = v23;
function poc_func() {
    new P();
    return [1.1,2.2];
}
for (let i44 = (() => {
        const v34 = {
            get a() {
            },
        };
        function f35(a36, a37) {
            a36.a = a37;
            return a37;
        }
        for (let v38 = 0; v38 < 1000; v38++) {
            const v39 = {};
            f35(v38 % 2 ? v39 : v34);
        }
        return 0;
    })();
    i44 < 25000;
    ++i44) {
    poc_func();
}
v10 = true;
const v53 = [0.29912954890556875,614075.1125419771,1000000000000.0,3.0,305.8959189841594];
const v54 = /(?<=a)/mvsd;
function F55(a57, a58) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v54;
    this.f = a57;
}
new F55(F55, v53);
[1000000000000.0,834.5556279780396];
[-873651408,1726766311,-676304879,-4294967295,4,2147483649,-2147483648,-65537,15623];
function f65() {
    return -9007199254740992;
}
f65();
f65();
%OptimizeFunctionOnNextCall(f65);
f65();
function f103(a104, a105) {
}
for (let i107 = 0; i107 < 20000; i107++) {
    const v113 = {};
    const v114 = {};
}
const v115 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
function f116() {
}
const v117 = {};
const v118 = {};
const v119 = %WasmArray();
const v121 = class {
    [this](a123, a124, a125) {
        for (let i127 = 0; i127 < 0;) {
        }
    }
    static valueOf(a133, a134) {
    }
}
function F135(a137, a138) {
    if (!new.target) { throw 'must be called with new'; }
}
class C140 {
    [Infinity]() {
    }
    static m() {
        function F143() {
            if (!new.target) { throw 'must be called with new'; }
        }
    }
}
for (const v145 in v115) {
    function f146(a147, a148) {
        const v153 = {
            toString(a150, a151, a152) {
            },
        };
    }
}
function f154(a155) {
}
class C156 extends f154 {
    static #n(a158, a159) {
    }
}
function F160(a162, a163) {
    if (!new.target) { throw 'must be called with new'; }
}
const v164 = class {
}
class C165 {
    static {
        function f167(a168, a169, a170, a171) {
        }
    }
}
function F172() {
    if (!new.target) { throw 'must be called with new'; }
}
const v174 = class {
}
class C176 {
}
class C177 {
    static {
    }
    static o(a180, a181) {
    }
}
const v183 = (`-63824${C177}512`).trimStart();
try { v183.blink(Uint32Array); } catch (e) {}
