const v1 = class {
    static {
    }
    static #f;
    static [undefined];
}
const v4 = new v1();
v4[Symbol.toStringTag] = v1;
const v7 = new v1();
try { v7.propertyIsEnumerable(v4); } catch (e) {}
class C9 {
    valueOf(a11) {
        super[a11];
        return this;
    }
    static [v4](a14, a15) {
        return v7;
    }
}
const v16 = new C9();
const v17 = new C9();
v17.constructor = Symbol;
const v18 = v17?.constructor;
try { new v18(); } catch (e) {}
[-4.0];
[v7,v16];
[-256];
function f25() {
    function F27(a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        function f31() {
            function f32(a33) {
                return f32;
            }
            function f35() {
                return f35;
            }
            function f36() {
                function f37() {
                    const v39 = Array(1048576);
                    v39[1048575] = "🙌🏿";
                    v39.pop();
                    v39.push(1048576);
                    const v43 = { done: true };
                    for (const v44 in v39) {
                    }
                    return v43;
                }
                return { next: f37 };
            }
            const v47 = Symbol.iterator;
            f35.bind(null, ...{ [v47]: f36 });
            return f32;
        }
        Object.defineProperty(this, "toString", { get: f31 });
    }
    const v51 = new F27();
    v51.toString();
    try { ("🙌🏿").toLowerCase(); } catch (e) {}
    ("🙌🏿").split("🙌🏿");
}
({ construct: f25 }).construct();
