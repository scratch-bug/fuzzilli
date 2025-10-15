for (let v2 = 0; v2 < 100; v2++) {
    const v4 = [];
    function f5(a6) {
        const v9 = SharedArrayBuffer.prototype.grow;
        const v10 = [,];
        try { v9.apply(undefined, v10); } catch (e) {}
    }
    v4.then = f5;
    async function f12() {
        await v4;
    }
    f12();
}
const t13 = Array.prototype;
t13[1122] = Uint8ClampedArray;
