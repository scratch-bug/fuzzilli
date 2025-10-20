const v1 = class extends Uint8Array {
}
const v3 = class {
}
function f4() {
    function f6() {
        return f6;
    }
    function f7() {
        function f8() {
            f8.arguments;
            return { done: true };
        }
        const v12 = { next: f8 };
        v12.next(v1);
        return v12;
    }
    const v14 = Symbol.iterator;
    f6.bind(null, ...{ [v14]: f7 });
    const v18 = Symbol.dispose;
    const v21 = {
        [v18]() {
            f4();
        },
    };
    using v22 = v21;
}
Object.defineProperty(v3, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f4 });
try { new Int32Array(v3); } catch (e) {}
