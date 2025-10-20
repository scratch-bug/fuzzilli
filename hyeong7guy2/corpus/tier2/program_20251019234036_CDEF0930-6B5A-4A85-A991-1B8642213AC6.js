const v1 = Date();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7() {
            return Date;
        }
        const v9 = class extends f7 {
        }
        const v10 = new v9();
        function f11() {
            return a4;
        }
        const v12 = Date.bind();
        const v15 = Symbol.iterator;
        const v40 = {
            [v15]() {
                const v31 = {
                    next() {
                        for (const v19 of "7") {
                            super[v19[0]] = v1;
                            [10,this,v12,typeof this === "number"];
                            const v25 = v15;
                        }
                        function f26(a27) {
                            return this;
                        }
                        class C28 extends f26 {
                        }
                        try { new C28(); } catch (e) {}
                        v10.h %= 10;
                        return { done: 10 };
                    },
                };
                let v32;
                try { v32 = v31(); } catch (e) {}
                try { v31(); } catch (e) {}
                const v35 = new Map();
                const v36 = v35.values();
                let v37;
                try { v37 = v36.equals(f11); } catch (e) {}
                v37 ?? v37;
                v36.next(v32, this, "7", f7, f11);
                return v31;
            },
        };
        function f42() {
            const v43 = new Date(WeakSet, Date, 882, ...v40, ...v40);
            for (let [v44,v45] of "7") {
                v45 ?? v45;
            }
            return v43;
        }
        const v47 = f42();
        f42.call(v47, v47, v1, v47);
        %OptimizeFunctionOnNextCall(f42);
        f42();
        function f50(a51) {
        }
        return f50;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v52 = new F2();
class C53 {
    static [v52](a55, a56, a57) {
    }
}
