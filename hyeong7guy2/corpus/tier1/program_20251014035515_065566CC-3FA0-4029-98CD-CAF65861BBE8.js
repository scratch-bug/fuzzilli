for (let v0 = 0; v0 < 50; v0++) {
    function f2() {
        return Symbol;
    }
    function f3() {
        function f4() {
            return { done: true };
        }
        return { next: f4 };
    }
    const v8 = Symbol.iterator;
    f2.bind(null, ...{ [v8]: f3 });
}
const v12 = {};
for (let i14 = 0; i14 < 20000; i14++) {
    const v21 = i14 ? {} : v12;
    v21.toISOString = {};
    for (const v24 in Uint8Array) {
    }
}
