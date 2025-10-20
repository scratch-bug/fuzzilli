const v10 = {
    construct(a1, a2) {
        const v4 = Intl.DateTimeFormat;
        v4("os", { numberingSystem: "hanidec" }).format(a2);
        return a1;
    },
};
v10.construct();
