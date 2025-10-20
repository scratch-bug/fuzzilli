async function f1(a2, a3) {
    function f4(a5, a6, a7, a8) {
        const v13 = {
            get g() {
                return f1;
            },
            set h(a11) {
            },
            [Symbol]() {
            },
        };
        return v13;
    }
    f4(Symbol, a3, f1, f1);
    f4();
    class C18 extends WeakMap {
    }
    function* f19(a20, a21) {
        yield* "valueOf";
        yield* C18;
        return f19;
    }
    f19();
    f4();
    f4(a3, a3, f1, a2);
    f4(f4(), f4, Symbol, Symbol);
    f4();
    f4();
    f4();
    for (let [i33, i34] = (() => {
            const v30 = %WasmStruct();
            return [0, 10];
        })();
        i34;
        (() => {
            let v37 = i34--;
            v37--;
        })()) {
    }
    for (let v41 = 0; v41 < 5; v41++) {
        const v42 = Symbol.asyncDispose;
        const v44 = {
            [v42]() {
            },
        };
        await using v45 = v44;
    }
    return C18;
}
f1();
f1(f1, Symbol);
%OptimizeFunctionOnNextCall(f1);
