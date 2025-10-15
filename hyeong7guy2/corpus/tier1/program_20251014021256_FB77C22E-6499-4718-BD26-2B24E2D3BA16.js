function f0() {
}
function f2() {
    return f0;
}
const v5 = Symbol.iterator;
const v14 = {
    [v5]() {
        let v7 = 10;
        const v13 = {
            next() {
                v7--;
                const v11 = v7 == 0;
                return { done: v11, value: v7 };
            },
        };
        return v13;
    },
};
const v17 = Symbol.iterator;
const v26 = {
    [v17]() {
        let v19 = 10;
        const v25 = {
            next() {
                v19--;
                const v23 = v19 == 0;
                return { done: v23, value: v19 };
            },
        };
        return v25;
    },
};
new Uint16Array();
[-2.2250738585072014e-308,-342.66637632972174,1000.0,-1.6116358514114264,Infinity,-425.44103428277276,1.0];
class C38 {
}
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
}
function f45(a46, a47) {
    a46[0];
    a46[0];
}
const v56 = {
    construct(a52, a53) {
        const t0 = a53[0];
        t0[0] = 1.1;
        return a52;
    },
};
function f58() {
}
const v59 = new Proxy(f58, v56);
const proxy = v59;
for (let i62 = 0; i62 < 25000; i62++) {
    f45([], proxy);
}
class C71 {
}
class C75 extends Int32Array {
}
function f76() {
}
class C78 {
}
function f79(a80, a81) {
}
class C83 {
}
const v84 = {};
function f85(a86, a87) {
}
for (let v88 = 0; v88 < 50; v88++) {
    const v89 = {};
    for (const v91 in 2) {
    }
    const v92 = {};
    const v95 = {
        [Symbol]() {
        },
    };
    const v97 = ("0061736d010000000105015f000003020101070501016600000a0f010d010170016e2000d26efb0700001c0b").match();
    Symbol.asyncIterator;
    let v99 = f85.bind();
    v99?.constructor;
    for (const v101 of v97) {
    }
}
for (const v102 of "boolean") {
}
