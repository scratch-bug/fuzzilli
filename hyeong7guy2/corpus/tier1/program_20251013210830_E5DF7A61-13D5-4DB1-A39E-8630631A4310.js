[4n];
Symbol.asyncDispose = Symbol;
const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        let v6 = 10;
        const v12 = {
            next() {
                v6--;
                const v10 = v6 == 0;
                return { done: v10, value: v6 };
            },
        };
        return v12;
    },
};
const v14 = class {
    static #p(a16) {
        Math.atan2(a16, a16);
        const v20 = ~a16;
        Math.log(v20);
        v20 | -14;
        return v20;
    }
}
try { v14(); } catch (e) {}
const v24 = new v14();
const v25 = new v14();
const v26 = new v14();
try { v26.hasOwnProperty(v26); } catch (e) {}
4096 >>> 4096;
new Int16Array(4096);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = Int16Array;
}
new F32(v25, v26);
new F32(v13, v25);
new F32(v24, v26);
const v39 = new F32(v26, v24);
class C41 extends Uint8Array {
}
const v42 = new C41();
function f43() {
}
for (let v44 = 0; v44 < 5; v44++) {
    v44 < v42;
}
function f46() {
    function f47() {
        -1048576;
        Array(1048576);
        return { done: true };
    }
    f47.g = f47;
    return { next: f47 };
}
try { f46(); } catch (e) {}
const v58 = Symbol.iterator;
const v59 = { [v58]: f46 };
let v61 = 1073741824;
v61--;
v39[Symbol.toPrimitive] = v59;
const v65 = f43();
v65 ?? v65;
%PrepareFunctionForOptimization(f43);
const v67 = f43();
v67 ?? v67;
f43();
%OptimizeMaglevOnNextCall(f43);
f43();
const v71 = f43.bind(null, ...v59);
v71.name = v71;
