function f0(a1) {
    let v2 = undefined;
    v2 = [];
    async function f4() {
        await v2;
        new Error();
    }
    function f8() {
    }
    f4().catch(f8);
}
for (let i12 = 0; i12 < 1000; i12++) {
    f0();
}
