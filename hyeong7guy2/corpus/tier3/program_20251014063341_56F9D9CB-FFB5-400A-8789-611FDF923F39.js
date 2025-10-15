function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.hour12 = this;
    const t3 = Intl.DateTimeFormat;
    t3(Intl, this);
}
new F0();
