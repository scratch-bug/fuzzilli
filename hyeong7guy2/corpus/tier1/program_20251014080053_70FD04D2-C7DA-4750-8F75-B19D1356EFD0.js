class C1 {
}
const v11 = class {
    static p(a13, a14) {
    }
    static n(a16, a17) {
    }
    static get g() {
    }
    static get b() {
    }
    [C1];
}
const v20 = new v11();
function f21() {
    return f21;
}
function f22() {
    function f23(a24) {
        function f25(a26, a27) {
            return f25;
        }
        const v30 = [v20];
        v30.toJSON = f23;
        v30[1] = v30;
        Worker(f25, { type: "function", arguments: v30 });
        return v30;
    }
    return f23;
}
function f33(a34) {
    return a34;
}
Object.defineProperty(f21, Symbol.iterator, { configurable: true, enumerable: true, get: f22, set: f33 });
try { new Uint16Array(f21); } catch (e) {}
