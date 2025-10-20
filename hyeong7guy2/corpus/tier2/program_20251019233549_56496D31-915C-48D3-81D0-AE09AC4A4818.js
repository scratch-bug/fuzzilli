const v12 = {
    o(a3, a4) {
        const v7 = { maxByteLength: 268435439 };
        const v9 = new SharedArrayBuffer(10, v7);
        const v10 = new Uint32Array(v9);
        v10.includes(-2147483648);
        return v7;
    },
};
v12.o(v12, -2147483648);
