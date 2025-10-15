new Uint8Array();
function f2() {
}
function f3() {
    function f5() {
        WeakSet.p138 = WeakSet;
        for (let v8 = 0; v8 < 100; v8++) {
            const v10 = "p" + v8;
            WeakSet[v10] = v10;
        }
        Array(1048576).includes(Symbol);
        return { done: true };
    }
    const v16 = { next: f5 };
    const v17 = {};
    /W(?:ab)+/mvsyd.lastIndex;
    try { f5(); } catch (e) {}
    f5();
    return v16;
}
const v23 = Symbol.iterator;
const v26 = f2.bind(null, ...{ [v23]: f3 });
v26 >> v26;
