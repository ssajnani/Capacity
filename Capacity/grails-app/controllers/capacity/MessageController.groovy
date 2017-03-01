package capacity

import grails.rest.RestfulController

class MessageController extends RestfulController {

    static allowedMethods = [createMessage: 'POST']
    static responseFormats = ['json', 'xml']

    MessageCreationController() {
        super(Message)
    }

    def index() {
        // unsure what this does
    }

    // Method to create message.
    def createMessage() {
        def messageText = params.message
        newMessage = new Message(userName: 'Anonymous', voteCount: 0, text: messageText)
    }

    def upvoteMessage() {

    }

}
