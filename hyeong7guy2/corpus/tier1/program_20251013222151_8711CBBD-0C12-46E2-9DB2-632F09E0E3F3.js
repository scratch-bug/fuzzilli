class C1 {
}
new C1();
new C1();
new C1();
class C5 {
}
new C5();
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
new F7();
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F7;
    this.h = a12;
    this.e = F7;
}
new F10();
new F10();
new F10(F10);
class C17 {
}
new C17();
new C17();
const v20 = {};
new Uint8ClampedArray(2147483648);
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
}
const v27 = new F24();
new F24();
new F24();
new F24();
function f31() {
    return v27;
}
function f33() {
    return 262;
}
0 in { b: Uint8ClampedArray };
/a\fb\nc\rd\te\vf/mugsyd;
function F37() {
    if (!new.target) { throw 'must be called with new'; }
    class C39 {
        static #d;
    }
    new C39();
    class C44 {
    }
    C39 / C39;
    const v46 = class {
    }
    class C47 extends v46 {
    }
    function F48(a50) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F51(a53, a54) {
        if (!new.target) { throw 'must be called with new'; }
    }
    for (let v56 = 0; v56 < 250; v56++) {
        const v62 = {
            [257](a58, a59, a60, a61) {
            },
        };
        new C47();
    }
    if (false) {
    }
    return {};
    function f67() {
    }
    const v68 = new Proxy(f67);
    for (let i70 = 0; i70 < 25000; ++i70) {
        v68();
    }
    function f77(a78, a79) {
        const v80 = {};
    }
    const v81 = {};
}
new F37();
function f83(a84, a85, a86, a87) {
}
class C90 {
    [Map](a92, a93, a94, a95) {
    }
}
function f97(a98, a99) {
}
for (let i101 = 0; i101 < 20000; i101++) {
    const v107 = {};
    const v108 = {};
    function f109(a110) {
        const v111 = {};
    }
    f97(Object, v108, 0, C90, C90);
}
const v113 = {};
const v114 = {};
