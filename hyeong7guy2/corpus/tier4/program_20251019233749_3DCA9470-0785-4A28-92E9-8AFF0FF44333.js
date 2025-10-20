const v1 = Temporal.ZonedDateTime;
const v2 = v1.prototype;
try { v2.getTimeZoneTransition(v1); } catch (e) {}
