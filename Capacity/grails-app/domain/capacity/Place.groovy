package capacity

import grails.converters.JSON
import groovy.json.JsonBuilder

class Place {

    String googleID // unique Google places ID

    static hasOne = [board : MessageBoard] // message storage for location

    JsonBuilder json = new JsonBuilder()
    def map = json {
        placeID this.googleID
        messages this.board.get
    }

    String result = json.toString()


    String getGoogleID() {
        return googleID
    }

    MessageBoard getBoard() {
        return board
    }

    def getPlaceData() {

    }


    static constraints = {
    }
}
