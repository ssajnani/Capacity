package capacity
import grails.converters.JSON

class Place {

    String googleID // unique Google places ID
    Message[] messageList = new Message[100]; // store messages
    int current = 0;

    String getGoogleID() {
        return googleID
    }

    Message[] getMessageList() {
        return messageList
    }

    void addMessage(Message m) {
        messageList[current] = m
        current = current + 1
    }

    static constraints = {
        googleID blank: false, nullable: false
    }
}
