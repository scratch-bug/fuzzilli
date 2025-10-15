const v4 = new Int8Array();
function f5(a6) {
    for (let i8 = 0;
        i8;
        (() => {
            for (let v11 = 0; v11 < 5; v11++) {
                v11 | v11;
            }
            ++i8;
        })()) {
        ([i8,i8]).push(1.1);
    }
}
Object.defineProperty(v4, "valueOf", { configurable: true, enumerable: true, value: f5 });
v4[8] = v4;
const v18 = new BigUint64Array(45);
class C20 extends Date {
    static get a() {
    }
    static {
        class C24 extends this.constructor {
        }
        new C24();
    }
    static get a() {
        %VerifyType(v18);
        return Date;
    }
    static set g(a28) {
    }
}
new C20();
const v30 = new C20();
const v31 = new C20();
const v32 = new C20();
new Array();
function f37() {
    return "🙌🏿";
}
function f39() {
    return f39;
}
class C40 extends f39 {
    #m(a42, a43, a44, a45) {
    }
    static [f39]() {
    }
}
const v47 = `unit${C40}bigint${C40}resolvedOptions${C40}number`;
function f48(a49, a50) {
    return a50;
}
const v53 = [C40,v47];
const v65 = {
    arguments: v53,
    get f() {
    },
    next: f39,
    [Worker]() {
        const v56 = %WasmArray();
        const v58 = Symbol.toPrimitive;
        this[v58] = v56;
        function* f59(a60, a61, a62) {
            yield* [v58,a61,a60,f48];
            return this;
        }
        f59(v30, v31, v32);
    },
    type: "function",
};
