try {
    for (let v0 = 0; v0 < 5; v0++) {
        function F1(a3, a4) {
            if (!new.target) { throw 'must be called with new'; }
            function f5() {
                function f6(a7) {
                    ("p").startsWith("p");
                }
                %OptimizeMaglevOnNextCall(f6);
                return f6;
            }
            Object.defineProperty(this, "toString", { get: f5 });
        }
        const v10 = new F1();
        v10.toString(v10, v0, v0, F1);
    }
} catch(e12) {
}
