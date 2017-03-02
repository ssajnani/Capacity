package capacity

class Place {

    String googleID // unique Google places ID

    static hasOne = [board : MessageBoard] // message storage for location

    String getGoogleID() {
        return googleID
    }

    MessageBoard getBoard() {
        return board
    }

    static constraints = {
    }
}
