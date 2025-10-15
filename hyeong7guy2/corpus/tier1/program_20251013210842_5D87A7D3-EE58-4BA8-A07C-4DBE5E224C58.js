[];
Symbol.asyncDispose = Symbol;
const v4 = Symbol.iterator;
const v12 = {
    [v4]() {
        let v6 = 10;
        const v11 = {
            next() {
                v6--;
                return { done: v6, value: v6 };
            },
        };
        return v11;
    },
};
const v13 = class {
    static #p(a15) {
        Math.atan2(a15);
        Math.log();
        a15 | -14;
        return a15;
    }
}
try { v13(); } catch (e) {}
const v22 = new v13();
const v23 = new v13();
const v24 = new v13();
let v25;
try { v25 = v24.hasOwnProperty(v24); } catch (e) {}
4096 >>> 4096;
let v29 = new Int16Array(4096);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
new F30();
new F30(v12, v23);
new F30(v22);
const v37 = new F30();
class C39 extends Uint8Array {
}
const v40 = new C39();
function f41() {
}
for (let v42 = 0; v42 < 5; v42++) {
    v42 < v40;
}
function f44() {
    Object[Symbol.matchAll];
    function f49() {
        Array(1048576);
        return { done: true };
    }
    return { next: f49 };
}
const v57 = Symbol.iterator;
const v58 = { [v57]: f44 };
v29 = v25;
v24 === "bigint";
let v63 = 1073741824;
v63--;
v37[Symbol] = v58;
const v66 = f41();
v66 ?? v66;
%PrepareFunctionForOptimization(f41);
const v68 = f41();
v68 ?? v68;
f41();
%OptimizeMaglevOnNextCall(f41);
f41();
const v72 = f41.bind(null, ...v58);
v72.name = v72;
