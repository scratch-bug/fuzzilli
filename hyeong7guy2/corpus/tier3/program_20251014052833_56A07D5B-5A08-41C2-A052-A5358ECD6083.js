function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
new F0(F0);
this instanceof F0;
