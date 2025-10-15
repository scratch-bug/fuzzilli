class C1 {
    static #o(a3) {
        return this;
    }
}
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v10 = 0; v10 < 100; v10++) {
    }
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        a13.name;
    }
    const v16 = new F11(F11);
    v16.constructor;
}
const v18 = new F8();
const v19 = v18.constructor;
v19.name;
new v19();
try { Reflect.deleteProperty(); } catch (e) {}
try { Date.blink(); } catch (e) {}
WeakSet || WeakSet;
class C29 {
}
const v30 = new C29();
try { v30(); } catch (e) {}
NaN % "zpxIb";
class C36 {
}
C36[2];
const v38 = class {
}
class C39 extends v38 {
}
for (let v42 = 0; v42 < 250; v42++) {
    v42 >> v42;
    25000 + 25000;
    -65537n << -65537n;
    let v48 = -65537n - -65537n;
    v48++;
    const v50 = -65537n ^ -65537n;
    v50 & v50;
    (`-63824`).trimStart();
    C39.propertyIsEnumerable();
    const v55 = class {
        static [C36](a57, a58, a59) {
        }
    }
    try { v55(); } catch (e) {}
}
