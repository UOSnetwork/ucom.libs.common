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
    static userCreatesMediaPostFromHimself() {
        return 160;
    }
    static userUpdatesMediaPostFromHimself() {
        return 161;
    }
    static userCreatesMediaPostFromOrganization() {
        return 170;
    }
    static userUpdatesMediaPostFromOrganization() {
        return 171;
    }
}
module.exports = EventsIdsDictionary;
