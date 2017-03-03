package capacity

import grails.rest.RestfulController
import grails.converters.JSON

class MessageController extends RestfulController {

    Random random = new Random()
    //static allowedMethods = ['createMessage']
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
        System.out.print('Message being posted...\n')
        def messageText = params.text
        Random random = new Random()
        String messageID = (random.nextInt(100000 + 1 - 1) + 1).toString()
        def googleID = params.googleID
        Boolean check = false

        while (!check) {
            def message = Message.find{messageID == messageID}
            def place = Place.find{googleID == googleID}
            if (message == null) {
                message = new Message(userName: 'Anonymous', text: messageText, messageID: messageID, googleID: googleID)
                place.addMessage(message)
                place.save()
                System.out.print(place.messageList.toString())
                message.save()
                System.out.print('Message created.\n')
                check = true
                response.status = 200
            } else {
                System.out.print('Message with this ID exists.\n')
                messageID = (random.nextInt(10000 + 1 - 1) + 1).toString()
            }
        }
    }

    // Upvote message, found by message ID and location.
    def upvoteMessage() {
        def id = params.messageID
        def message = Message.find{messageID == id}

        message.upvote()
    }

}
