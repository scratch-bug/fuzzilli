const v0 = /(?:ab)|cdeWOPa+/yv;
const v1 = class {
    #o() {
        return v0;
    }
    static c = v0;
    e;
}
new v1();
const v4 = new v1();
new v1();
const v6 = new v1();
const v7 = class extends v1 {
    set f(a9) {
        new v1(v6, v4, v1, this);
    }
    static #o(a12, a13, a14) {
        return v1;
    }
}
new v7();
const v16 = class {
    static #toString(a18, a19, a20) {
        switch (this) {
            default:
                break;
        }
        return v16;
    }
}
new v16();
new v16();
new v16();
class C26 extends WeakSet {
}
function f27() {
    const v28 = {};
    function f29() {
        return f29;
    }
    function f30(a31) {
        return WeakSet;
    }
    Object.defineProperty(f29, "set", { configurable: true, enumerable: true, get: C26, set: f30 });
    Object.defineProperty(v28, "getOwnPropertyDescriptor", { configurable: true, enumerable: true, get: f29, set: f29 });
    function f33() {
        return Proxy;
    }
    const v34 = new Proxy(f33, v28);
    v34.prototype = v34;
    return f30;
}
try { f27(); } catch (e) {}
