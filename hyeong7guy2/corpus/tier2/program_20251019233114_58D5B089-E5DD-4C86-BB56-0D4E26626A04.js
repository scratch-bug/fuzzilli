const v3 = new Uint8Array(7);
function f4() {
    for (let v5 = 0; v5 < 5; v5++) {
        [,f4,Set] = v3;
        const v9 = new ArrayBuffer(v5, { maxByteLength: 1073741824 });
        const v11 = new Int16Array(v9);
        v11.includes(f4);
    }
    return f4;
}
({ next: f4 }).next();
