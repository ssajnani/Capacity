package capacity

class Message {

    String messageID // unique ID attached to identify comment
    String userName  // attached to user who posted, may also be anonymous to start
    int voteCount    // score attached to comment
    String text      // actual text of message
    String location  // location this message pertains to

    // Increment vote count by one.
    def upvote() {
        this.voteCount = this.voteCount + 1
    }

    // Decrement vote count by one.
    def downvote() {
        this.voteCount = this.voteCount - 1
    }

    static constraints = {
        messageID blank: false, unique: true, nullable: false
        userName blank: false, nullable: false
        voteCount blank: false, nullable: false
        text blank: false, size: 1..140, nullable: false
        location blank: false, nullable: false
    }
}
