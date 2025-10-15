const v0 = class {
}
function f1(a2) {
    let v3 = undefined;
    v3 = [];
    async function f5() {
        await v3;
        Error();
        return v0;
    }
    function f9() {
        return v3;
    }
    f5().catch(f9);
    return f5;
}
for (let i13 = 0;
    i13 < 1000;
    (() => {
        i13++;
        const v24 = {
            p(a19, a20, a21, a22) {
                return super.h;
            },
        };
    })()) {
    f1();
}
