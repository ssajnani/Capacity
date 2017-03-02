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

    // Retrieves a message corresponding to an id number from the dictionary
    def retrieveMessage(int idNumber) {
        messageMap.get(idNumber)
    }
}
