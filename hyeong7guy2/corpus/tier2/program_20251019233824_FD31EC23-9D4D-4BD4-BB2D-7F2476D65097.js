const v0 = class {
    o(a2) {
        function f3(a4, a5) {
            while (9) {
            }
        }
        const v9 = [];
        new Worker(f3, { arguments: v9, type: "function" });
    }
}
const v12 = new v0();
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        function f18(a19) {
            ([this,this,this,this])[4];
            v12.o();
        }
        f18();
        f18();
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f17 });
}
const v25 = new F13();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
