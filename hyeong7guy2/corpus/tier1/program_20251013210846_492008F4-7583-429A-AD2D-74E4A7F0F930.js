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
v13.c = v13;
const v14 = class {
    static #p(a16) {
        Math.atan2(a16, a16);
        const v20 = ~a16;
        Math.log(v20);
        v20 | -14;
        return v20;
    }
}
v14.length;
try { v14(); } catch (e) {}
const v25 = new v14();
v25.g = v25;
const v26 = new v14();
const v27 = new v14();
let v28;
try { v28 = v27.hasOwnProperty(v27); } catch (e) {}
v28 || v28;
4096 >>> 4096;
let v33 = new Int16Array(4096);
v33.byteLength;
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    try { a38.constructor(); } catch (e) {}
    this.b = Int16Array;
}
const v40 = new F35(v26, v27);
const v41 = v40?.b;
try { new v41(v40, v25, v25); } catch (e) {}
new F35(v13, v26);
const v44 = new F35(v25, v27);
const v45 = v44?.__defineGetter__;
try { new v45(v27, F35); } catch (e) {}
const v47 = new F35(v27, v25);
class C49 extends Uint8Array {
}
try { C49.fromHex(4096); } catch (e) {}
const v51 = new C49();
function f52() {
}
try { f52(); } catch (e) {}
for (let v54 = 0; v54 < 5; v54++) {
    v54 < v51;
}
function f56() {
    try { new Object(v47); } catch (e) {}
    Object[Symbol.matchAll];
    function f63() {
        const v66 = -1048576;
        v66 >> v66;
        const v68 = Array(1048576);
        try { v68.find(v66); } catch (e) {}
        return { done: true };
    }
    f63.g = f63;
    f63.g = f63;
    return { next: f63 };
}
let v74;
try { v74 = f56(); } catch (e) {}
const v75 = v74?.__defineSetter__;
try { new v75(v26, v26); } catch (e) {}
const v78 = Symbol.iterator;
const v79 = { [v78]: f56 };
v33 = v28;
typeof v27 === "bigint";
let v85 = 1073741824;
v85--;
const v87 = v85--;
v87 >> v87;
v47[Symbol.toPrimitive] = v79;
const v91 = f52();
v91 ?? v91;
%PrepareFunctionForOptimization(f52);
const v93 = f52();
v93 ?? v93;
f52();
%OptimizeMaglevOnNextCall(f52);
const v96 = f52();
v96 ?? v96;
const v98 = f52.bind(null, ...v79);
v98.e = v98;
v98.name = v98;
