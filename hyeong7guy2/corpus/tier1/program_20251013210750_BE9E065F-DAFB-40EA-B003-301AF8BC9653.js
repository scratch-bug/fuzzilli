function f0() {
}
function f5() {
    return -65536;
}
WebAssembly.Module;
function poc(a10) {
    a10.a = 2.3023e-320;
    return a10.b;
}
for (let i14 = 0; i14 < 20000; i14++) {
    const v21 = {};
    let o = { a: 1, b: v21 };
    poc(o);
}
const v25 = {};
let o = { b: v25 };
poc(o);
const v29 = {};
let done = false;
const v32 = !done;
if (v32) {
    new Array(1048576);
}
new Map();
/Rx/ivgsd;
function f40() {
}
function f41() {
    function f42() {
        const v58 = {
            value: 0,
            p0: 0,
            done: false,
            a: 0,
            lib: v32,
            done: true,
            value: 0,
            [true](a46, a47, a48, a49) {
            },
            b: v29,
            p0: -65536,
            done: v32,
            set a(a51) {
                super.a;
            },
            __proto__: Uint8Array,
            [true](a54, a55, a56, a57) {
            },
        };
        return v58;
    }
    return { next: f42 };
}
const v61 = Symbol.iterator;
f40.bind(null, ...{ [v61]: f41 });
