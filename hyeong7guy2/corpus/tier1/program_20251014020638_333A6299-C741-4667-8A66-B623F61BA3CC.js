class C1 {
    set f(a3) {
        const t2 = {};
        t2.e = 10;
        const v11 = {
            construct(a7, a8) {
                const t0 = a8[0];
                t0[0] = 1.1;
                return a7;
            },
        };
        function f13() {
        }
        const v14 = new Proxy(f13, v11);
        for (let i16 = 0; i16 < 25000; i16++) {
            Reflect.construct(v14, [[]]);
        }
        for (const v29 of a3) {
        }
    }
    static n() {
        return this;
    }
}
const v31 = new C1();
const v32 = new C1();
const v33 = new C1();
const v35 = [1000000.0,0.0,3.0,805487.0054769053,6.362316891529741,-4.0,478.9701221424302,921.7763677565181];
for (let v36 = 0; v36 < 1000; v36++) {
    v35[v36];
    v36 < 20000;
    v36++;
}
new Int16Array(512);
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a46;
}
const v48 = new F44(v31, v31);
new F44(v32, v33, v48, v48);
new F44(C1, F44);
new F44(v33, v32);
const v52 = [10000,1073741823,48911,9007199254740991,1304882224,1904958827];
[v52,v52,v52,v52];
function F54(a56) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v52;
    (["376244960"]).pop();
    const v62 = { execution: gc };
    v62.type = v62;
    gc(v62);
    class C64 {
    }
    const v65 = {};
    v65.p1 = gc;
    v65.d = v65;
    function f66(a67) {
        v65.p1 = C64;
    }
    for (let i74 = (() => {
            const v68 = class {
            }
            new v68();
            Object.create({});
            return 2;
        })();
        i74 < 20000;
        ++i74) {
    }
}
new F54(F54);
function f82() {
}
function f83() {
}
class C84 {
}
const v86 = {
    get a() {
    },
};
function f87(a88, a89) {
}
for (let v90 = 0; v90 < 250; v90++) {
    const v91 = {};
    const v93 = Symbol.toPrimitive;
    const v95 = {
        [v93]() {
        },
    };
}
class C96 extends Map {
    #o(a98, a99, a100, a101) {
        for (let i103 = 0; i103 < 20000;) {
            function f108(a109, a110) {
            }
            function F111(a113, a114) {
                if (!new.target) { throw 'must be called with new'; }
            }
        }
    }
}
function f115() {
}
class C116 extends f115 {
}
