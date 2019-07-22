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

  public static userUpdatesProfile(): number {
    return 151;
  }

  public static userCreatesMediaPostFromHimself(): number {
    return 160;
  }

  public static userUpdatesMediaPostFromHimself(): number {
    return 161;
  }

  public static userCreatesMediaPostFromOrganization(): number {
    return 170;
  }

  public static userUpdatesMediaPostFromOrganization(): number {
    return 171;
  }
}

export = EventsIdsDictionary;
