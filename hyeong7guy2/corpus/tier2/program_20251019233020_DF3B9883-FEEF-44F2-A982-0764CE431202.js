class C0 {
    static {
        function f2(a3) {
            const v5 = [-1000.0,-Infinity,1000000000.0,-1000.0];
            Object[10] = Object;
            Object.preventExtensions(Object);
            Reflect.apply(v5.includes, Object, Float32Array);
            return this;
        }
        Object.defineProperty(this, "g", { configurable: true, enumerable: true, set: f2 });
        this.g = this;
    }
}
