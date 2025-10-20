function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        const v5 = class {
        }
        for (let i = 0; i < 5; i++) {
        }
        class C7 extends Uint32Array {
        }
        const v8 = class {
        }
        function F9(a11) {
            if (!new.target) { throw 'must be called with new'; }
        }
        for (let v13 = 0; v13 < 5; v13++) {
            const v14 = {};
            for (const v15 in "boolean") {
                function f16(a17, a18, a19, a20) {
                    return Symbol;
                }
            }
            const v21 = {};
            const v22 = {};
            const v23 = /../g;
            let v24;
            try { v24 = v23.compile("toString"); } catch (e) {}
            v24.exec(f4);
        }
        return { done: true };
    }
    return { next: f4 };
}
const v29 = Symbol.iterator;
f2.bind(null, ...{ [v29]: f3 });
