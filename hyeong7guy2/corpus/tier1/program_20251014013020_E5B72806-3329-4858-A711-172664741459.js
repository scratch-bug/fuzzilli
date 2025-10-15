[];
[2.220446049250313e-16,-1.7976931348623157e+308];
Uint8ClampedArray - Uint8ClampedArray;
const v5 = new Uint8ClampedArray();
const v6 = class {
}
const t6 = v5.constructor;
new t6(v5, 1024);
class C9 {
}
C9[1024] = C9;
let v10;
try { v10 = new C9(); } catch (e) {}
const t13 = v10.constructor;
new t13();
let v15 = -9007199254740991n;
v15++;
function f17(a18) {
}
f17.length = f17;
try { ("4").codePointAt(); } catch (e) {}
("4").normalize();
for (let v23 = 0; v23 < 5; v23++) {
    const v24 = { getOwnPropertyDescriptor: f17, has: Array };
    try { Proxy(v23); } catch (e) {}
    const v27 = new Proxy(Array, v24);
    v27.e = v27;
}
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
    function F31() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F31();
}
try { F28(F28); } catch (e) {}
(129)?.big;
function f36(a37, a38) {
    new a38();
    Reflect.construct(a38, a37);
}
f36.length;
const v54 = {
    construct(a44, a45) {
        a44.constructor;
        a45 ?? a45;
        a44.d = a44;
        a45[0] = 1.1;
        Reflect.getOwnPropertyDescriptor(Reflect);
        const v51 = Reflect.construct(a44, a45);
        const v52 = v51.constructor();
        v52 ?? v52;
        return v51;
    },
};
v54 ?? v54;
function f57() {
}
f57.bind(129);
f57.call(C9);
const v60 = new Proxy(f57, v54);
try { v60(); } catch (e) {}
for (let v63 = 0; v63 < 100; v63++) {
    for (let v65 = 0; v65 < 32; v65++) {
        ("p").valueOf().length;
        "p" + v65;
    }
    const v71 = v63++;
    v71 >>> v71;
}
const v75 = [0,2];
const v76 = v75.fill(v60);
try { v76.findIndex(); } catch (e) {}
f36(v75, v60);
