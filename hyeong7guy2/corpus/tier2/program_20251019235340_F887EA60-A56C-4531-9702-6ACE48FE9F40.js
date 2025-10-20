function f1() {
    return f1;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f1);
const v6 = Symbol.iterator;
const v28 = {
    [v6]() {
        let v8 = 10;
        const v27 = {
            next() {
                v8--;
                const v12 = v8 == 0;
                const v13 = { done: v12 };
                function f15() {
                    function f16() {
                        Error().stack;
                        return { done: true };
                    }
                    return { next: f16 };
                }
                const v23 = Symbol.iterator;
                Date.bind(null, ...{ [v23]: f15 });
                return v13;
            },
        };
        return v27;
    },
};
Array.fromAsync(v28);
