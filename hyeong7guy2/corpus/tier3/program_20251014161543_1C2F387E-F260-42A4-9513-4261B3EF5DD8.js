function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F0 {
}
AggregateError.cause = v4;
try { AggregateError(AggregateError, AggregateError, AggregateError); } catch (e) {}
