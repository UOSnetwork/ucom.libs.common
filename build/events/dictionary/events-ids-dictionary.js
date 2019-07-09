"use strict";
// #task - completely move NotificationsEventIdDictionary from ucom.backend
class EventsIdsDictionary {
    static registration() {
        return 130;
    }
    static referral() {
        return 140;
    }
    static userCreatesProfile() {
        return 150;
    }
}
module.exports = EventsIdsDictionary;
