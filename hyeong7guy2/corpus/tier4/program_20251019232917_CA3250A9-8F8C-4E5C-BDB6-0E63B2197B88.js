function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = Intl.DateTimeFormat;
    v7("mr", { calendar: "ethiopic" });
}
new F0();
