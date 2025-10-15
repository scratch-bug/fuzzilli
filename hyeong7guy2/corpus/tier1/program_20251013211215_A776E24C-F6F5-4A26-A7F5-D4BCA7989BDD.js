for (let i = 0; i < 5; i++) {
    function f1(a2) {
    }
    WeakSet[Symbol.toPrimitive] = f1;
    const t4 = WeakSet.constructor;
    t4(WeakSet);
}
