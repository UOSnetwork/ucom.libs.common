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
    static userUpdatesProfile() {
        return 151;
    }
}
module.exports = EventsIdsDictionary;
