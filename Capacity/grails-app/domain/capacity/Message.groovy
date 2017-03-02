package capacity

class Message {

    String messageID // unique ID attached to identify comment
    String userName  // attached to user who posted
    int voteCount    // score attached to comment
    String text      // actual text of message
    String location  // location this message pertains to

    // Increment vote count by one.
    def upvote() {
        this.voteCount = this.voteCount + 1
    }

    String getMessageID() {
        return messageID
    }

    String getUserName() {
        return userName
    }

    int getVoteCount() {
        return voteCount
    }

    String getText() {
        return text
    }

    String getLocation() {
        return location
    }

    static constraints = {
        messageID blank: false, unique: true, nullable: false
        userName blank: false, nullable: false
        voteCount blank: false, nullable: false
        text blank: false, size: 1..140, nullable: false
        location blank: false, nullable: false
    }
}
