function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
    this.b = f0;
    this.e = f0;
}
new F1();
const v4 = [-985108042,1073741824,65537,-7];
const v7 = new Uint32Array(106);
v7.toLocaleString("valueOf", "valueOf");
function f10(a11, a12) {
    return a11;
}
function f13(a14) {
    return f10;
}
const v16 = new Float32Array(106, Float32Array, 106);
v16.f = v16;
gc();
for (let i20 = 0; i20 < 20000; i20++) {
}
[v16,Float32Array,1073741824,v4,F1,F1,Float32Array];
const v28 = [8,1373168635];
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    a32[0] = a32;
    this.cause = a31;
}
new F29(f0, v28);
function f35() {
    return 129;
}
f35.valueOf = f35;
class C36 extends f35 {
}
C36.name = C36;
const v37 = {};
v4["indexOf"](undefined, "indexOf");
function f41() {
    return f35;
}
f41.name;
Object.defineProperty(f41, "initial", { value: C36 });
const v44 = WebAssembly.Memory;
try { new v44(v44); } catch (e) {}
function F46(a48, a49) {
    if (!new.target) { throw 'must be called with new'; }
    function f50(a51, a52, a53) {
        function F55(a57, a58, a59, a60) {
            if (!new.target) { throw 'must be called with new'; }
            function f61() {
                return this;
            }
            function f62(a63) {
                function F64(a66, a67) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F64.call(a63); } catch (e) {}
                return a49;
            }
            Object.defineProperty(this, "e", { get: f61, set: f62 });
            this.e = -1;
        }
        new F55(a52, F46, a53, F46);
        return a49;
    }
    f50();
    %OptimizeFunctionOnNextCall(f50);
}
