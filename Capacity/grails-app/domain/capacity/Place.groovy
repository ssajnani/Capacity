package capacity
import grails.converters.JSON

class Place {

    String googleID // unique Google places ID
    def messageList = []

    String getGoogleID() {
        return googleID
    }

    void addMessage(Message m) {
        messageList << m
    }

    static constraints = {
        googleID blank: false, nullable: false
    }
}
