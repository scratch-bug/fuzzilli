function f0() {
}
Symbol.description;
async function f3(a4, a5) {
    try { a5(); } catch (e) {}
    try {
    const t0 = "America/La_Paz";
    t0();
    } catch (e) {}
    function F9(a11) {
        if (!new.target) { throw 'must be called with new'; }
        a11++;
        Object.defineProperty(this, "a", { configurable: true, enumerable: true, value: a11 });
        const v13 = new f0();
        class C14 {
            static [v13](a16, a17, a18) {
            }
        }
        C14.d = C14;
    }
    new F9();
    new F9(f3);
    for (let [i25, i26] = (() => {
            function F23() {
                if (!new.target) { throw 'must be called with new'; }
            }
            return [0, 10];
        })();
        i26;
        i26--) {
    }
    (await f3).name;
}
f3(f3, f3);
%OptimizeFunctionOnNextCall(f3);
