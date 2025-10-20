for (let i1 = 0; i1 < 20000; i1++) {
    const v8 = new Uint8ClampedArray();
    v8[v8.byteLength] &= i1;
}
