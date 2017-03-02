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
    // Generates unique message ID that will pertain to the created message for lookup later.
    def createMessage() {
        def messageText = params.text
        def place = params.location
        def message = Message.find{messageID == id}

        // Message ID unique, so generate new message.
        if (message == null) {
            message = new Message(userName: 'Anonymous', voteCount: 0, text: messageText, messageID: id, location: place)
            System.out.print('Message created.')
            response.status = 200
        } else {
            System.out.print('Message with this ID exists.')
            response.status = 500
        }

    }

    // Upvote message, found by message ID and location.
    def upvoteMessage() {
        def id = params.messageID
        def location = params.location
        def messageBoard = MessageBoard.find{location == location}
        def message = messageBoard.getMessage(id)

        message.upvote()
    }

}
