for (let v0 = 0; v0 < 5; v0++) {
    const v3 = { maxByteLength: 405 };
    const v5 = new SharedArrayBuffer(405, v3);
    const v7 = new Float64Array(v5);
    v7.slice(v3, v0);
}
