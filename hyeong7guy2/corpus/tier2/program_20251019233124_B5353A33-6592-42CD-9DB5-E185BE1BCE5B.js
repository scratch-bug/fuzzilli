const v1 = class extends Float64Array {
}
for (let v2 = 0; v2 < 50; v2++) {
    let v4 = v2 % 2;
    v4--;
    const v6 = class {
    }
    function f7(a8) {
        function f9(a10, a11) {
            a11[f7] = v1;
            const t10 = -59966556;
            return delete t10[v6];
        }
        return v1;
    }
    const v16 = {
        [Symbol]() {
            v4 = this;
        },
    };
    function F17() {
        if (!new.target) { throw 'must be called with new'; }
    }
    try { F17.call(); } catch (e) {}
}
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
function f22(a23) {
    const v25 = Temporal.PlainDate;
    const v26 = {};
    v26.day = v26;
    v25.from(v26);
    return a23;
}
Object.defineProperty(F20, Symbol.iterator, { configurable: true, enumerable: true, value: f22 });
class C30 {
}
try { new C30(F20, ...F20); } catch (e) {}
