function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Array.prototype;
    const v5 = v4.push;
    v5.call(v4, v5);
}
new F0(F0);
const v8 = [1000000.0,0.0,3.0,805487.0054769053,6.362316891529741,-4.0,478.9701221424302,921.7763677565181];
for (let v9 = 0; v9 < 10; v9++) {
    v8[v9];
}
