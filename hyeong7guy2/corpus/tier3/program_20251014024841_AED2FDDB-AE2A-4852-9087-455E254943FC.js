const v1 = class {
    static {
        try {
        const t0 = 10n;
        t0(10n);
        } catch (e) {}
    }
    static c = 10n;
}
