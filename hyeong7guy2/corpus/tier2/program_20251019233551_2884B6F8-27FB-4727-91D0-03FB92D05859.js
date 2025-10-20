function F1() {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "g", { writable: true, configurable: true, value: 127 });
    this.g = 127;
    this.f = 127;
}
new F1();
const v4 = new F1();
const v5 = v4?.constructor;
try { new v5(); } catch (e) {}
const v7 = new F1();
function f8() {
    return Uint8ClampedArray;
    return 127;
}
v7.constructor = f8;
const v10 = v7?.constructor;
try { new v10(); } catch (e) {}
const v12 = new F1();
v12.g = v12;
[-1000000.0,-0.24324886280855829,0.3376616078050919,-809.8620145815931,-8.976249653384275e+307,-2.2250738585072014e-308];
~-65536;
const v17 = [58121,-909253840,65535,65537,10,32378];
v17[4] = v17;
class C19 {
}
const v20 = [C19,129];
v20.with(v20, 129);
let v22 = 1588;
class C23 {
}
C23?.constructor;
const v27 = gc();
v27 ?? v27;
function f29() {
    return gc;
}
const v30 = new C19();
v30.c = v30;
new Float64Array(v22);
709364318 & 709364318;
(16)[13];
class C39 {
    static {
    }
}
try { C39.toString(); } catch (e) {}
v22 & v22;
v22-- | 709364318;
let v47;
try { v47 = undefined.constructor(undefined); } catch (e) {}
v47 ?? v47;
C39.length = C39;
const v49 = new C39();
function f50() {
    const t55 = Intl.ListFormat;
    const v54 = new t55("function");
    return v54;
}
v49.constructor = f50;
const v55 = v49.constructor;
try { new v55(); } catch (e) {}
let v57;
try { v57 = new v55(); } catch (e) {}
v57.constructor = f8;
const v58 = v57?.constructor;
try { new v58(); } catch (e) {}
v57.valueOf();
function f61() {
}
try { f61(); } catch (e) {}
let v63;
try { v63 = f61(); } catch (e) {}
v63 ?? v63;
const v65 = class extends f61 {
    static {
        class C67 {
        }
        const v68 = C67?.constructor;
        try { new v68(C67); } catch (e) {}
        const v70 = {};
        v70.a = v70;
        for (let v71 = 0; v71 < 50; v71++) {
            v71 + v71;
            const v73 = {};
            v73.h = v71;
            const v75 = 2 ? v73 : v70;
            Object.defineProperty(v75, "a", { writable: true, configurable: true, enumerable: true, value: C67 });
            v75.a;
            v75.h = v75;
        }
        const v77 = {};
    }
}
for (let v78 = 0; v78 < 10; v78++) {
}
