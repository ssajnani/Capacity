package capacity

class Message {

    String userName
    int voteCount
    String text

    def upvote() {
        this.voteCount = this.voteCount + 1
    }

    def downvote() {
        this.voteCount = this.voteCount - 1
    }

    static constraints = {
    }
}
