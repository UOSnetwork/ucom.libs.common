// #task - completely move NotificationsEventIdDictionary from ucom.backend

class EventsIdsDictionary {
  public static registration(): number {
    return 130;
  }

  public static referral(): number {
    return 140;
  }

  public static userCreatesProfile(): number {
    return 150;
  }
}

export = EventsIdsDictionary;
