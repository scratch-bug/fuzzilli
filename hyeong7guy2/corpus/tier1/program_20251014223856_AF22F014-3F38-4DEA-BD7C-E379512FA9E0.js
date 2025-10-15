function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 127;
    this.a = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
f6.d = f6;
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = a9?.constructor;
    try { new v10(); } catch (e) {}
    this.e = F0;
}
const v12 = new F7(v4);
const v13 = v12?.constructor;
try { new v13(v4); } catch (e) {}
const v15 = new F7(v3);
v15.length;
try { ("Global").substring(f6, v12); } catch (e) {}
88 >> 88;
const v22 = new Uint16Array(88);
try { v22.values(); } catch (e) {}
class C24 {
    static set h(a26) {
        Uint16Array / f6;
    }
    static [v5](a29, a30, a31) {
    }
}
try { C24.bind(88); } catch (e) {}
new C24();
const v34 = class {
}
v34.prototype = v34;
function f35(a36) {
    let v37 = undefined;
    v37 = [];
    async function f39() {
        await v37;
    }
    function f42() {
    }
    f39();
}
for (let i45 = 0;
    i45 < 1000;
    (() => {
        i45++;
        const v55 = {
            p(a51, a52, a53, a54) {
            },
        };
    })()) {
    f35();
}
