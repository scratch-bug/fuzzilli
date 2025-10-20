function f0(a1, a2, a3) {
    const v5 = Temporal.PlainDateTime;
    const v7 = { hour: 25 };
    return v5.from(v7, { overflow: "reject" });
}
new Worker(f0, { type: "function" });
function f15(a16) {
    return a16;
}
new Worker(f15, { type: "function" });
