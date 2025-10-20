for (let v0 = 0; v0 < 10; v0++) {
    const v2 = new SharedArrayBuffer(v0);
    const v4 = new Uint8Array(v2);
    v4.set(v4);
}
