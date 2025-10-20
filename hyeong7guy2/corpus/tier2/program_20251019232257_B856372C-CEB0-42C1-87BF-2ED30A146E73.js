function f3() {
    return WeakMap;
}
function f4() {
    function f5() {
        const v6 = class {
        }
        const v7 = v6.apply;
        for (const v8 in Uint8Array) {
        }
        const v10 = Int16Array.from(v7);
        for (let i13 = 0;
            (() => {
                const v15 = i13 < 20000;
                const v16 = v15 instanceof WeakSet;
                v10.__proto__;
                WeakMap = v16;
                return v15;
            })();
            i13++) {
        }
        const v21 = {};
        for (let v22 = 0; v22 < 5; v22++) {
        }
        for (let v23 = 0; v23 < 5; v23++) {
        }
        const v24 = {};
        const v25 = {};
        const v30 = {
            done: f5,
            valueOf(a27, a28, a29) {
                return a29;
            },
        };
        return v30;
    }
    function f31() {
        return f31;
    }
    function f32() {
        function f33() {
            for (let v35 = 0; v35 < 25; v35++) {
                const v37 = "p" + v35;
                WeakSet[v37] = v37;
            }
            return { done: true };
        }
        return { next: f33 };
    }
    const v41 = Symbol.iterator;
    f31.bind(null, ...{ [v41]: f32 });
    return { next: f5 };
}
const v46 = Symbol.iterator;
f3.bind(null, ...{ [v46]: f4 });
