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
        def messageText = params.text
        def id = params.messageID
        def place = params.location
        def message = Message.find{messageID == id}

        if (message == null) {
            message = new Message(userName: 'Anonymous', voteCount: 0, text: messageText, messageID: id, location: place)
            System.out.print('Message created.')
            response.status = 200
        } else {
            System.out.print('Message with this ID exists.')
            response.status = 500
        }

    }

    def upvoteMessage() {
        def mCode = params.messageID
        def location = params.location
        def messageBoard = MessageBoard.find{location == location}
        def message = messageBoard.getMessage(id)

        message.upvote()
    }

    def downvoteMessage() {
        def id = params.messageID
        def location = params.location
        def messageBoard = MessageBoard.find{location == location}
        def message = messageBoard.getMessage(id)

        message.downvote()
    }

}
