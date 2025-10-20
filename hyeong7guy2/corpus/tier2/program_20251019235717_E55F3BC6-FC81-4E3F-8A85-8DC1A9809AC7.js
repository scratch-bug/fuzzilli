const v1 = class {
    static get f() {
    }
}
Object.defineProperty(v1, "f", { enumerable: true, get: Symbol, set: Symbol });
