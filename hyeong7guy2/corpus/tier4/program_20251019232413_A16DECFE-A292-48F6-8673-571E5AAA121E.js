function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    delete arguments[2];
}
new F2(1.2613353369955326e+308, 4, 1.2613353369955326e+308);
