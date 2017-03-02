package Capacity

class MessageBoard {
    def messageMap = [:]
    def idList = []

    static hasMany = [messages : Message]

    def getID(int arrayCount){ //gets the id specified by the parameter
        return idList.get(arrayCount)
    }
    def messageMapping(Message newMessage){ //Stores new messages in a map
        messageMap.put(newMessage.getMessageID, newMessage.getText)
        idList >> newMessage.getMessageID
    }
    def retrieveMessage(int idNumber){ //Retrieves a message corresponding to an id number from the map
        messageMap.get(idNumber)
    }
}
