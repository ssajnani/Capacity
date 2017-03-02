package capacity

class MessageBoard {

    def messageMap = [:]
    def idList = []

    static hasMany = [messages : Message]
    static belongsTo = [place : Place]

    //gets the id specified by the parameter
    def getID(int arrayCount){
        return idList.get(arrayCount)
    }

    // Stores new messages in dictionary
    def messageMapping(Message newMessage){
        messageMap.put(newMessage.getMessageID, newMessage.getText)
        idList >> newMessage.getMessageID
    }

    Message[] getXMessages(int n) {
        Message[] toReturn = new Message[x]
        for (i = 0; i < x; i++) {
            toReturn[i] = retrieveMessage(idList[i])
        }
        return toReturn
    }

    // Retrieves a message corresponding to an id number from the dictionary
    def retrieveMessage(int idNumber) {
        messageMap.get(idNumber)
    }
}
