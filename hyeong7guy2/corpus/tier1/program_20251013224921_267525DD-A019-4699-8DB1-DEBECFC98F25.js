const v0 = [-2.0,-5.0,3.0,-8.523435358204644];
const v4 = Symbol.iterator;
Symbol.for(v4.description);
const v16 = {
    [v4]() {
        let v9 = 10;
        const v15 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                return { done: v13, value: v9 };
            },
        };
        return v15;
    },
};
v16.a = v16;
const v17 = /pfoo(?!bar)baza?/imuy;
v17.dotAll = v17;
false || false;
class C20 {
    static o(a22, a23, a24) {
        [] = v16;
        return a22;
    }
    static {
    }
}
try { C20.o(v0, v0, -128); } catch (e) {}
let v27;
try { v27 = new C20(); } catch (e) {}
new C20();
const v29 = new C20();
try { v29.propertyIsEnumerable(C20); } catch (e) {}
new C20();
try { new Symbol(); } catch (e) {}
const v37 = Symbol.for(Symbol.iterator.description);
const v46 = {
    [v37]() {
        let v39 = 10;
        const v45 = {
            next() {
                v39--;
                v39 == 0;
                return { done: v27, value: v39 };
            },
        };
        return v45;
    },
};
v46.b = v46;
const v47 = [false,v0,v29,v29];
try { v47.toLocaleString(); } catch (e) {}
try { v47.flat(); } catch (e) {}
function f50() {
    return f50;
}
class C51 extends f50 {
}
C51.prototype;
function f53() {
    return C51;
}
class C54 {
    static {
        let v55 = this;
        function f56(a57, a58, a59) {
            a58.g = a58;
            const v60 = a59 ?? a59;
            v60 ?? v60;
            const v63 = this ?? this;
            v63 ?? v63;
            function f65(a66) {
                return v37;
            }
            try { f65(v55); } catch (e) {}
            for (let v68 = 0; v68 < 5; v68++) {
                v68 >>> v68;
                Object.defineProperty(a58, this, { set: f65 });
            }
            [f53,v55,f53] = a58;
            return Symbol;
        }
        let v70;
        try { v70 = f56(C51, f56); } catch (e) {}
        v70 ?? v70;
        new Worker(f56, { type: "function" });
    }
}
try { new C54(); } catch (e) {}
