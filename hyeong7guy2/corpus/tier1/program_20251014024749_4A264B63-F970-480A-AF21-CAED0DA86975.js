class C1 {
}
new C1();
const v3 = new C1();
let v4;
try { v4 = new v3("p"); } catch (e) {}
v4 ?? v4;
new C1();
new Set();
Map ?? Map;
const v11 = class {
    #m(a13, a14, a15, a16) {
        return 3205470135;
    }
}
new v11();
try {
    try { Array.isArray(); } catch (e) {}
    function f22() {
        return Array;
    }
    function f23() {
        function f24() {
            const v26 = Array(1048576);
            const v27 = v26.find;
            try { v27(f22); } catch (e) {}
            const v29 = v26.toString();
            v29[461403] = v29;
            v29.search(Array);
            return v29;
        }
        const v31 = { next: f24 };
        try { v31.next(); } catch (e) {}
        const v33 = v31.next();
        try { v33.normalize(); } catch (e) {}
    }
    const v35 = Symbol.iterator;
    const v36 = { [v35]: f23 };
    null ?? null;
    f22.bind(null, ...v36);
} catch(e40) {
}
