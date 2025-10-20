const v0 = [-4.465162508619862];
const v1 = class {
}
const v3 = ({})[v1];
function f5() {
    const v7 = Temporal.Duration;
    let v8;
    try { v8 = v7.round(); } catch (e) {}
    for (const v9 of v0) {
        try { new v7(v3, v8, v8, v3, v9); } catch (e) {}
    }
    return v8;
}
ArrayBuffer.valueOf = f5;
new ArrayBuffer(ArrayBuffer);
