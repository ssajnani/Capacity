package capacity

class MessageBoard {

    String location

    static hasMany = [messages : Message]

    static constraints = {
    }
}
