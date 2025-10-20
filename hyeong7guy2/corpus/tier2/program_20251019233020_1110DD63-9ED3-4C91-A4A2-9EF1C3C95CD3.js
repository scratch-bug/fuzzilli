const v12 = {
    o(a2, a3) {
        const v8 = new SharedArrayBuffer(10, { maxByteLength: 268435439 });
        const v10 = new Float64Array(v8);
        return v10.includes(0);
    },
};
v12.o(v12, 0);
