function f2() {
    return f2;
}
function f3() {
    function f4() {
        function f5(a6) {
            return a6;
        }
        const v10 = new Worker(f5, { type: "function" });
        const v12 = { done: true };
        try {
            v10.postMessage(Set, Worker);
        } catch(e14) {
        }
        return v12;
    }
    return { next: f4 };
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
