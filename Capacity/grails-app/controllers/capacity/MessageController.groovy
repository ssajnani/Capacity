package capacity

import grails.rest.RestfulController

class MessageController extends RestfulController {

    static allowedMethods = [createMessage: 'POST']
    static responseFormats = ['json', 'xml']

    MessageController() {
        super(Message)
    }

    def index() {
        // unsure what this does
    }

    // Method to create message.
    def createMessage() {
        def messageText = params.message
        def id = params.messageID
        def location = params.location
        newMessage = new Message(userName: 'Anonymous', voteCount: 0, text: messageText, messageID: id, location: place)
        response.status = 200
    }

    def upvoteMessage() {
        def mCode = params.mCode
        def location = params.location
        def messageBoard = MessageBoard.find(location == location)
        def message = messageBoard.getMessage(mCode)

        message.upvote()
    }

    def downvoteMessage() {
        def id = params.messageID
        def location = params.location
        def messageBoard = MessageBoard.find(location == location)
        def message = messageBoard.getMessage(id)

        message.downvote()
    }

}
