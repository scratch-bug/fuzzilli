const v1 = ["undefined","undefined","undefined","undefined","undefined"];
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -1024;
    this.d = a5;
    this.f = v1;
}
new F3(F3);
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = "undefined";
    this.c = a9;
}
new F7(F3);
new F7(F3);
const v12 = new F7(v1);
v12.g;
new F7("undefined");
true && true;
function f17() {
    return F7;
}
try { f17.bind(f17); } catch (e) {}
class C21 {
}
try { C21.bind(f17); } catch (e) {}
function f23(a24) {
    const v25 = a24?.constructor;
    try { new v25(a24); } catch (e) {}
    throw 13;
}
C21.then = f23;
function F27(a29) {
    if (!new.target) { throw 'must be called with new'; }
}
const v30 = class extends C21 {
    constructor(a32, a33) {
        super();
        const v35 = WebAssembly.compileStreaming(C21);
        function f36() {
            function f37(a38) {
                a38(C21, a32);
            }
            f37[Symbol.species] = f37;
            return f37;
        }
        function f42(a43) {
        }
        Object.defineProperty(v35, "constructor", { configurable: true, get: f36, set: f42 });
        v35.then();
    }
}
new v30(F27);
