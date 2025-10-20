/fR/duymi;
class C3 extends Int16Array {
}
const v9 = Symbol.iterator;
const v39 = {
    [v9]() {
        let v11 = 10;
        v11--;
        const v13 = v11 % v11;
        const v38 = {
            next() {
                const v15 = { done: v11 };
                for (let v16 = 0; v16 < 25; v16++) {
                    with (d8) {
                        try { test.constructor(test); } catch (e) {}
                        Object.defineProperty(C3, test, { writable: true, value: v13 });
                        function f20(a21) {
                        }
                        f20.name;
                        class C23 extends f20 {
                        }
                        const v24 = test.FastCAPI;
                        try { new v24(); } catch (e) {}
                        const v26 = new v24();
                        v26.g = v26;
                        test.FastCAPI;
                        const v28 = test.FastCAPI;
                        try { new v28(); } catch (e) {}
                        const v30 = test.FastCAPI;
                        try { v30.bind(test); } catch (e) {}
                        const v32 = v30.constructor;
                        try { v32.apply(test, v16); } catch (e) {}
                        try { v32(); } catch (e) {}
                        const v35 = new v30(v16);
                        try { v35.sum_uint64_as_number(); } catch (e) {}
                        new v30();
                    }
                }
                return v15;
            },
        };
        return v38;
    },
};
const v41 = new Int16Array();
new Date(WeakSet, Date, 882, ...v41, ...v39);
new Float64Array();
