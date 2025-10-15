for (let v1 = 0; v1 < 10; v1++) {
    for (const v2 in 1) {
    }
}
class C3 {
}
function f4() {
}
function f5(a6) {
}
const v7 = class {
    static get f() {
    }
    static #m(a10) {
    }
}
const v11 = new v7();
function f12() {
}
const v13 = {};
for (let i15 = 0;
    (() => {
        const v17 = i15 < 10000;
        !v17;
        return v17;
    })();
    (() => {
        let v21 = -(++i15);
        v21++;
    })()) {
}
try { v11.constructor(); } catch (e) {}
const v25 = new v7();
let v26;
try { v26 = v25.constructor(); } catch (e) {}
v26 ?? v26;
const v28 = {};
v28.h = v28;
function f30(a31) {
    function f33() {
        const v34 = /[Mabc+?]/vy;
        function f36(a37, a38) {
            function F39(a41, a42) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v43 = delete v34[1655];
            [!v43];
            return v43;
        }
        const v46 = f36();
        %PrepareFunctionForOptimization(f36);
        %OptimizeMaglevOnNextCall(f36);
        f36(v34, v46);
        return f30;
    }
    Object.defineProperty(arguments, 2, { configurable: true, get: f33 });
    return a31;
}
[-0.0,-899056.0307194764,Infinity];
-1000000.0 * -1000000.0;
([65537])[0];
class C54 {
    static get e() {
        const v56 = %WasmStruct();
        return v56;
    }
    #m(a58, a59, a60, a61) {
        return this;
    }
}
try { C54.call(8n); } catch (e) {}
new C54();
-(-9223372036854775808n);
new BigInt64Array(4294967295);
