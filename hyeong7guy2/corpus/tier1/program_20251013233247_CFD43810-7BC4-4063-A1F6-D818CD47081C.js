const v3 = Symbol.iterator;
const v12 = {
    [v3]() {
        let v5 = 10;
        const v11 = {
            next() {
                v5--;
                const v9 = v5 == 0;
                return { done: v9, value: v5 };
            },
        };
        return v11;
    },
};
const v13 = [268435439n,0n,0n];
const v15 = new Set();
function f18() {
    return v12;
}
const v19 = class {
    static #m(a21, a22, a23, a24) {
        Object.defineProperty(v13, 167, { get: f18 });
        return "boolean";
    }
    b;
}
new v19();
new v19();
new v19();
new v19();
class C32 {
}
new C32();
[];
new Float64Array();
let v47 = undefined;
v47 = -1886296164n;
function f48(a49, a50, a51, a52) {
}
f48(77, 13);
const v55 = Symbol.for();
const v56 = {};
const v59 = [-0.0076588076814161354,846.8147469512944,613.0582036291662];
function F60(a62) {
    if (!new.target) { throw 'must be called with new'; }
}
Symbol.iterator;
const v64 = class {
    static #p(a66) {
    }
}
let v69;
try { v69 = v64(); } catch (e) {}
const v70 = new v64();
v70.g = v70;
function f73() {
    function f74(a75) {
        let v80 = Symbol.bind(this, ("wGXa").normalize("NFD"));
        v80(a75, f74, ...v15, ...v59, f73, ..."boolean");
        class C82 extends v55 {
        }
        return f74;
    }
    new Worker(f74, { arguments: v59, type: "function" });
    return f73;
}
const v87 = f73(v64);
function f91(a92, a93, a94) {
    try { a93.keyFor(...a92, 4096, Symbol, ...v12, ..."2GL", a94); } catch (e) {}
    return 4096;
}
try { f91(v87, Symbol, v69); } catch (e) {}
