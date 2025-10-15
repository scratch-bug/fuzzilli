const v2 = new Float32Array(45);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = v2.byteOffset;
    let {...v7} = v2;
    delete v7[v6];
}
new F3();
