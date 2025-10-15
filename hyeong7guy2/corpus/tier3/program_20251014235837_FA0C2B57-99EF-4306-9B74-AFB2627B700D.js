function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [1000000.0,0.0,3.0,805487.0054769053,6.362316891529741,-4.0,478.9701221424302,921.7763677565181];
    v5[793] = 16;
    for (let i7 = 0;
        (() => {
            let v9 = v5[i7];
            v9++;
            return i7 < 20000;
        })();
        i7++) {
    }
}
new F0();
