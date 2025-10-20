const v1 = Float64Array[1];
try { v1(); } catch (e) {}
function f3() {
    const v4 = class {
        static #p(a6) {
            eval();
        }
    }
    return f3;
}
