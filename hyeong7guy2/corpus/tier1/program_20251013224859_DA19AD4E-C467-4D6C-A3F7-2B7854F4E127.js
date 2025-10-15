const v0 = [-2.0,-5.0,3.0,-8.523435358204644];
const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        let v6 = 10;
        const v12 = {
            next() {
                v6--;
                const v10 = v6 == 0;
                return { done: v10, value: v6 };
            },
        };
        return v12;
    },
};
const v14 = /pfoo(?!bar)baza?/imuy;
v14.dotAll = v14;
class C16 {
    static o(a18, a19, a20) {
        [] = v13;
        return a18;
    }
    static {
    }
}
try { new C16(); } catch (e) {}
new C16();
const v24 = new C16();
try { v24.propertyIsEnumerable(C16); } catch (e) {}
const v26 = new C16();
const v28 = Symbol.iterator;
Symbol.for(v28.description);
const v40 = {
    [v28]() {
        let v33 = 10;
        const v39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                return { done: v37, value: v33 };
            },
        };
        return v39;
    },
};
const v41 = [false,v0,v24,v26];
try { v41.flat(); } catch (e) {}
function f43() {
    return f43;
}
class C44 extends f43 {
}
function f45() {
    return C44;
}
class C46 {
    static {
        let v47 = this;
        function f48(a49, a50, a51) {
            a50.g = a50;
            a51 ?? a51;
            this ?? this;
            function f55(a56) {
                return a50;
            }
            for (let v57 = 0; v57 < 5; v57++) {
                Object.defineProperty(a50, this, { set: f55 });
            }
            [f45,v47,f45] = a50;
            return f45;
        }
        try { f48(C44, f48); } catch (e) {}
        new Worker(f48, { type: "function" });
    }
}
try { gc.toString(); } catch (e) {}
gc();
