const v2 = new Float64Array(16);
class C4 {
}
function f6(a7, a8) {
    if (false) {
    }
    const v9 = new a7(...a8);
    return v9;
}
const v11 = new Proxy(C4, { construct: f6 });
const P = v11;
function poc_func() {
    new P();
}
for (let i19 = 0; i19 < 25000; ++i19) {
    poc_func();
}
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Float64Array;
    this.f = Float64Array;
    this.h = 16;
}
new Uint8Array(333);
class C32 extends F26 {
    [v2](a34, a35, a36) {
        return v2;
    }
    static [333](a38, a39, a40, a41) {
        return Uint8Array;
    }
}
C32[333] = C32;
v11[333];
function f43() {
    return v2;
}
f43[6];
for (let i49 = 0; i49 < 100000; i49++) {
}
Symbol ?? Symbol;
const v56 = Symbol.iterator;
function f57() {
    const v58 = {};
}
function F59(a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    function f63(a64, a65, a66) {
        function f67() {
            return F59;
        }
        function f68(a69, a70) {
        }
        f67.constructor = f68;
        class C71 extends f67 {
        }
        const v72 = `unit${C71}bigint`;
        const v73 = C71.constructor;
        v73(v72);
        return v73;
    }
    f63(F59, F59);
}
const v76 = v56.description;
Object.defineProperty({}, "relativeTo", { enumerable: true, value: v76 });
function f78() {
    return v56;
}
f78.d = f78;
const v79 = [0.0,-5.0,-1e-15,-651444.7695244057,1.5857248930509024e+308,-38327.7975071643,-8.135749465211018e+307,3.083921013302577,706.8190728593218];
function f80() {
    return v79;
}
class C81 extends f80 {
}
function f82() {
    const v84 = Temporal?.ZonedDateTime;
    let v85;
    try { v85 = new v84(F26, f78); } catch (e) {}
    v85 ?? v85;
    const v87 = Temporal.Duration;
    try { v87(); } catch (e) {}
    try { new v87(); } catch (e) {}
    const v90 = v2.constructor;
    function F91(a93, a94) {
        if (!new.target) { throw 'must be called with new'; }
        function f95() {
            function f96(a97) {
                const v98 = f96[4];
                let v99 = 7;
                v99++;
                v98 | v99;
                return v99;
            }
            %OptimizeMaglevOnNextCall(f96);
            return f96;
        }
        Object.defineProperty(this, "toString", { get: f95 });
        f95();
    }
    const v103 = new v87();
    v103.hours = v103;
    try { v103.round(C32); } catch (e) {}
    v103.round(v90);
    return Temporal;
}
try { f82(); } catch (e) {}
function f107(a108) {
    const t108 = a108.f;
    new t108(v56, C32, f107);
    return a108;
}
try { f107(C32); } catch (e) {}
Object.defineProperty(f78, Symbol.iterator, { configurable: true, enumerable: true, get: f82, set: f107 });
let v114;
try { v114 = new Uint16Array(f78); } catch (e) {}
v114 ?? v114;
v114 ?? v114;
