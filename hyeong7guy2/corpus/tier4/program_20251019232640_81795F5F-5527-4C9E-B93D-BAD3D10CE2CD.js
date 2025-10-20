class C0 {
    static {
        const v2 = /\p{Script_Extensions=Greek}?/dsg;
        const v5 = String.prototype.replace;
        try { v5.call(C0, v2, C0); } catch (e) {}
    }
}
