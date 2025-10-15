function f0(a1) {
    const v2 = `
        /\ud808\udf45*(?:a{5,1000000}){3,1000000}G?/mgsy;
    `;
    return a1;
}
new Worker(f0, { type: "function" });
