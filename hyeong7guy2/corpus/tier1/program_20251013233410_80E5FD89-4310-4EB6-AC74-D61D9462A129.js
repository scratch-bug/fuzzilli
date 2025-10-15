const v1 = class {
}
try { v1.call(); } catch (e) {}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = {};
    for (let v6 = 0; v6 < 100; v6++) {
        v6++;
        v5.a = v6;
    }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        try { a11.constructor(); } catch (e) {}
    }
    new F8(F8);
}
const v14 = new F3();
const t17 = v14.constructor;
new t17();
const v21 = {
    construct(a18, a19) {
        return Reflect;
    },
};
function f23() {
}
const v24 = new Proxy(f23, v21);
const v26 = Reflect.construct(v24, v21);
v26.defineProperty(v26, v1, v1);
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    function f33(a34, a35, a36) {
        a34 >> a34;
        a36.length;
    }
    const v40 = {
        get c() {
        },
    };
    f33(Int16Array, f33, v40);
    %OptimizeFunctionOnNextCall(f33);
}
new F29(0, F29);
new F29();
new F29();
const v45 = {};
Symbol.iterator;
const v48 = {};
