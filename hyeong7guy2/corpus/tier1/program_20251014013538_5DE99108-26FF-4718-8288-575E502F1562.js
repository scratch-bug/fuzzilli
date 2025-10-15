const v3 = new Int8Array(4096);
class C5 {
    static o(a7) {
        v3[1] = a7;
        return a7;
    }
    static 11;
}
new C5();
new C5();
new C5();
new C5();
new Int32Array(128);
const v15 = class extends Int32Array {
    static set d(a17) {
        for (let v18 = 0; v18 < 32; v18++) {
            a17["p" + v18] = v18;
        }
    }
}
new v15();
new v15();
[];
[2.220446049250313e-16,-1.7976931348623157e+308];
Uint8ClampedArray - Uint8ClampedArray;
const v29 = new Uint8ClampedArray();
const v30 = class {
}
const t28 = v29.constructor;
new t28(v29, 1024);
class C33 {
}
C33[1024] = C33;
let v34;
try { v34 = new C33(); } catch (e) {}
const t35 = v34.constructor;
new t35();
let v39 = -9007199254740991n;
v39++;
function f41(a42) {
}
f41.length = f41;
try { ("4").codePointAt(); } catch (e) {}
("4").normalize();
for (let v47 = 0; v47 < 5; v47++) {
    const v48 = { getOwnPropertyDescriptor: f41, has: Array };
    try { Proxy(v47); } catch (e) {}
    const v51 = new Proxy(Array, v48);
    v51.e = v51;
}
function F52(a54) {
    if (!new.target) { throw 'must be called with new'; }
    function F55() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F55();
}
try { F52(F52); } catch (e) {}
(129)?.big;
function f60(a61, a62) {
    new a62();
    Reflect.construct(a62, a61);
}
f60.length;
const v78 = {
    construct(a68, a69) {
        a68.constructor;
        a69 ?? a69;
        a68.d = a68;
        a69[0] = 1.1;
        Reflect.getOwnPropertyDescriptor(Reflect);
        const v75 = Reflect.construct(a68, a69);
        const v76 = v75.constructor();
        v76 ?? v76;
        return v75;
    },
};
v78 ?? v78;
function f81() {
}
f81.bind(129);
f81.call(C33);
const v84 = new Proxy(f81, v78);
try { v84(); } catch (e) {}
for (let v87 = 0; v87 < 100; v87++) {
    for (let v89 = 0; v89 < 32; v89++) {
        ("p").valueOf().length;
        "p" + v89;
    }
    v87++;
}
([0,2]).fill(v84);
new Uint8ClampedArray(262);
function F103(a105) {
    if (!new.target) { throw 'must be called with new'; }
}
function f106() {
}
function f108() {
}
const v109 = {};
function F110() {
    if (!new.target) { throw 'must be called with new'; }
}
function f112(a113, a114, a115, a116) {
}
class C119 {
    [Map](a121, a122, a123, a124) {
    }
}
const v125 = new C119();
const v128 = Object.create({});
function f129(a130, a131) {
}
for (let i133 = 0; i133 < 20000; i133++) {
    const v139 = {};
    const v142 = i133 % 2 ? v139 : v128;
    f129(v142, {}, 0, C119, v125);
}
const v145 = {};
