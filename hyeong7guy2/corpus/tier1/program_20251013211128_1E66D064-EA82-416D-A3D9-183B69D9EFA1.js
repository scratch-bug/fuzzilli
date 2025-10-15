const v1 = Symbol.iterator;
const v3 = {
    [v1]() {
    },
};
new Array();
for (let i10 = 0; i10 < 20000; i10++) {
    const v17 = {};
    const v18 = {};
}
const v19 = {};
const v20 = {};
const v22 = !false;
function f23() {
}
function f24() {
    function f25() {
        const v38 = {
            [v19](a29, a30, a31, a32) {
            },
            value: 0,
            p0: 0,
            done: false,
            a: 0,
            lib: v22,
            [true](a34, a35, a36, a37) {
            },
            b: v20,
            done: v22,
        };
        return v38;
    }
    return { next: f25 };
}
const v41 = Symbol.iterator;
const v47 = {
    set g(a43) {
        function f45(a46) {
        }
    },
    [v41]: f24,
};
f23.bind(null, ...v47);
