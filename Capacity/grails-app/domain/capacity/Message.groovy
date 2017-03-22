package capacity

/*Message Class

Used to classify messages in the backend with a few defining variables
 */

class Message {

    //Attribute Declarations
    String messageID  // unique ID attached to identify comment
    String userName   // attached user who posted comment
    int voteCount     // score attached to comment
    String text       // actual text of message
    String googleID   // location this message pertains to

    // Increment vote count by one.
    def upvote() {
        this.voteCount = this.voteCount + 1
    }

    //Return messageID
    String getMessageID() {
        return messageID
    }

    //Return username
    String getUserName() {
        return userName
    }

    //Return vote count
    int getVoteCount() {
        return voteCount
    }

    //Return message text
    String getText() {
        return text
    }

    //Return googleID
    String getGoogleID() {
        return googleID
    }

    //Describes it's relationship with other entities
    static belongsTo = [place:Place]
    static hasOne = [user:User]

    static constraints = {
        messageID blank: false, unique: true, nullable: false
        userName blank: false, nullable: false
        voteCount blank: false, nullable: false
        text blank: false, size: 1..140, nullable: false
        googleID blank: false, nullable: false
    }
}
