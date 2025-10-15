const v1 = class {
    static f;
    static get e() {
        return this;
    }
}
new v1();
const v4 = /[\p{Script=Greek}]/iu;
v4 !== 65535 ? v4 : 65535;
const v9 = Symbol.iterator;
const v17 = {
    [v9]() {
        do {
            new Uint16Array();
        } while (4)
        return {};
    },
};
function hot_func(a19) {
    let val = {};
    let i = 0;
    i++;
}
let v27 = 0;
while (v27 < 8) {
    const v30 = v27++;
    function* f31(a32, a33, a34, a35) {
        const v37 = class {
            get d() {
            }
        }
        Array.b = [];
        function f41() {
        }
        const v42 = {};
    }
    f31(v30, v30);
}
for (let i45 = 0; i45 < 100000; ++i45) {
    hot_func();
}
new Int32Array(1647);
function hot_func(a57) {
    const v59 = { p: 42 };
    let v60 = 0;
    do {
        if (a57) {
        }
    } while (v60++, 0)
    return v59.p;
}
for (let i65 = 0; i65; ++i65) {
}
