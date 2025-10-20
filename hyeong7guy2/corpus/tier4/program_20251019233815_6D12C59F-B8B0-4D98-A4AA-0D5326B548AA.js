for (let v0 = 0; v0 < 250; v0++) {
    const v3 = [];
    function f4(a5) {
        const v8 = SharedArrayBuffer.prototype.grow;
        const v9 = [,];
        try { v8.apply(undefined, v9); } catch (e) {}
    }
    v3.then = f4;
    async function f11() {
        await v3;
    }
    f11();
}
