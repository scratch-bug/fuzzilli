function poc(a5) {
    a5.a = 2.3023e-320;
    return a5.b;
}
for (let i9 = 0; i9 < 20000; i9++) {
    const v16 = {};
    const v17 = { a: 1, b: v16 };
    poc(v16);
}
const v19 = {};
let o = { b: v19 };
poc(o);
const v23 = {};
const v25 = !false;
new Array(1048576);
new Map();
/Rx/ivgsd;
function f33() {
}
function f34() {
    function f35() {
        const v46 = {
            value: 0,
            done: false,
            a: 0,
            lib: v25,
            done: true,
            value: 0,
            [true](a39, a40, a41, a42) {
            },
            p0: -65536,
            set a(a44) {
                super.a;
            },
            __proto__: Uint8Array,
        };
        return v46;
    }
    return { next: f35 };
}
const v49 = Symbol.iterator;
f33.bind(null, { [v49]: f34 });
