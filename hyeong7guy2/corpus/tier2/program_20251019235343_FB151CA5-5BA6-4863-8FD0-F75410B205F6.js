new Float64Array(175);
new Int32Array(8);
const v8 = [Int32Array,Float64Array,8,Int32Array];
function f10() {
    return "f";
}
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a13;
    this.a = a16;
}
const v17 = new F11(v8, "f", F11, Int32Array);
new F11(8, "f", f10, v17);
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F19(Int32Array, F11, 5.0, Int32Array);
const v26 = new F19(F11, 5.0, 8, "f");
new F19(v26, v17, v26, f10);
function f29() {
    return Symbol;
}
function f30() {
    function f31() {
        for (let v32 = 0; v32 < 50; v32++) {
            function F33(a35) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v36 = class extends F33 {
                constructor(a38, a39) {
                    const v40 = {};
                    super();
                    a39 | a39;
                    function f43() {
                        return f43;
                    }
                    WebAssembly.compileStreaming().catch(f43);
                }
            }
            new v36();
        }
        return { done: true };
    }
    return { next: f31 };
}
const v50 = Symbol.iterator;
f29.bind(null, ...{ [v50]: f30 });
