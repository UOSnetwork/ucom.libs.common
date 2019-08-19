// #task - completely move NotificationsEventIdDictionary from ucom.backend

class EventsIdsDictionary {
  public static userCreatesDirectPostForOtherUser(): number {
    return 70;
  }

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

  public static userUpdatesDirectPostForUser(): number {
    return 162;
  }

  public static userCreatesMediaPostFromOrganization(): number {
    return 170;
  }

  public static userUpdatesMediaPostFromOrganization(): number {
    return 171;
  }

  public static userUpdatesDirectPostForOrganization(): number {
    return 172;
  }

  public static userCreatesOrganization(): number {
    return 180;
  }

  public static userUpdatesOrganization(): number {
    return 181;
  }
}

export = EventsIdsDictionary;
