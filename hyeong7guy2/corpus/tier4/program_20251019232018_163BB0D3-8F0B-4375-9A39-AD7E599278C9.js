async function f1(a2, a3) {
    for (const v4 of "bigint") {
    }
    for (let [i8, i9] = (() => {
            let v5 = 0;
            v5++;
            return [v5, 10];
        })();
        i9;
        i8++, i9--) {
    }
    await f1;
    return a2;
}
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
