const v1 = class {
    set g(a3) {
        try { this.valueOf(); } catch (e) {}
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            const v11 = globalThis?.performance?.measureMemory;
            try { v11(a8); } catch (e) {}
        }
        new F5(736.3033200176926, F5);
    }
}
class C14 extends v1 {
    valueOf(a16, a17) {
        super.g /= 736.3033200176926;
    }
}
const v18 = new C14();
v18.valueOf();
