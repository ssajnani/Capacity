package capacity
import grails.converters.JSON

/*Place Class

Used to classify places in the backend with a few defining variables
 */
class Place {
    //Attribute Declarations
    String googleID // unique Google places ID
    Message[] messageList = new Message[100]; // store messages
    int current = 0;

    //Returns googleID
    String getGoogleID() {
        return googleID
    }

    //Returns messageList
    Message[] getMessageList() {
        return messageList
    }

    //Used to add a message to the list
    void addMessage(Message m) {
        messageList[current] = m
        current = current + 1
    }

    //Relationship with messages
    static hasMany = [messages:Message]

    static constraints = {
        googleID blank: false, nullable: false
    }
}
