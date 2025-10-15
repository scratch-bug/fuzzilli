const v0 = {};
let v1 = "customSections";
let v2 = true;
function f3(a4) {
    if (v2) {
        v1 = 1;
    }
    return a4;
}
for (let i7 = 0;
    (() => {
        const v13 = {
            m(a10, a11, a12) {
                return i7;
            },
        };
        return i7 < 20000;
    })();
    ++i7) {
    f3(i7);
}
v2 = false;
