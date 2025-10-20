function f1() {
    return WebAssembly;
}
WebAssembly.instantiateStreaming(WebAssembly, WebAssembly).catch(f1);
const v6 = Symbol.iterator;
const v22 = {
    [v6]() {
        const v21 = {
            next() {
                const v10 = { done: 10 };
                const v12 = class {
                }
                function f13() {
                    const v15 = Intl.DateTimeFormat;
                    const v17 = {};
                    v17.calendar = 10;
                    v15("os", v17);
                    return "os";
                }
                Object.defineProperty(v12, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f13 });
                try { new Int32Array(v12); } catch (e) {}
                return v10;
            },
        };
        return v21;
    },
};
Array.fromAsync(v22);
