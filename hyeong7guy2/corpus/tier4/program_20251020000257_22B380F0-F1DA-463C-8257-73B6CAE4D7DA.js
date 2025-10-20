function f1(a2) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v5 = 0; v5 < 100; v5++) {
    }
    class C6 {
    }
    new C6(F3, ...F3);
    for (let v8 = 0; v8 < 5; v8++) {
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            C6.constructor;
        }
    }
    return C6;
}
const v16 = new Worker(f1, { type: "function" });
function f17(a18, a19, a20) {
    return v16;
}
new Worker(f17, { type: "function" });
