new Uint16Array();
const v3 = class {
}
new v3();
class C6 {
    #valueOf(a8, a9, a10, a11) {
    }
}
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
function f19(a20, a21) {
    Reflect.construct(a21, [a20]);
    a20[0] + 1;
}
const v34 = {
    construct(a29, a30) {
        const t0 = a30[0];
        t0[0] = 1.1;
        return a29;
    },
};
function f36() {
}
const v37 = new Proxy(f36, v34);
const proxy = v37;
for (let i40 = 0; i40 < 25000; i40++) {
    f19([1,2], proxy);
}
f19(1, proxy);
class C54 {
}
class C55 {
}
function f56(a57, a58) {
    function F59(a61, a62) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F59(704087666, 704087666);
}
try { Uint8Array.values(); } catch (e) {}
for (const v68 in Uint8Array) {
    for (let [v69,v70,v71] of 256) {
    }
}
const v74 = ["function"];
new Worker(f56, { arguments: v74, type: "function" });
const v77 = `-63824${C55}512`;
try { v77.blink(); } catch (e) {}
class C81 extends Int32Array {
}
new C81();
function f83() {
}
class C84 {
}
const v86 = {
    get a() {
    },
};
function f87(a88, a89) {
}
const t62 = {};
t62.a = C84;
Symbol.toPrimitive;
let v93 = f87.bind();
