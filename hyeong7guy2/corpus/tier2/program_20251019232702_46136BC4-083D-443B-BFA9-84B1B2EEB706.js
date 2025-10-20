const v13 = {
    o(a3, a4) {
        const v9 = new SharedArrayBuffer(10, { maxByteLength: 268435439 });
        const v11 = new Float64Array(v9);
        v11.includes(-9223372036854775808, 4);
        return v9;
    },
};
v13.o(4, v13);
