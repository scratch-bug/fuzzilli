class C3 {
    static #h;
    ["4294967297"](a5, a6) {
        for (const v7 of a6) {
        }
        return a6;
    }
}
new C3();
class C12 extends C3 {
    static get b() {
        return C3 = this;
    }
}
new C12();
new Uint16Array(1906);
[-1,257,268435456,-10,-65535,9007199254740992,268435440,-2147483649,-33241,-2068774416];
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    function f25() {
        function f26(a27) {
            const v29 = d8.getExtrasBindingObject(a23);
            v29.getContinuationPreservedEmbedderData();
            v29.g = v29;
            v29.getContinuationPreservedEmbedderData();
        }
        f26();
        f26();
        %OptimizeMaglevOnNextCall(f26);
        return f26;
    }
    Object.defineProperty(this, "toString", { get: f25 });
}
const v36 = new F21();
const t34 = v36.toString;
t34();
("4294967297")["4294967297"];
const v41 = Symbol.iterator;
const v48 = {
    [v41]() {
        const v47 = {
            next() {
                return { value: 10 };
            },
        };
    },
};
