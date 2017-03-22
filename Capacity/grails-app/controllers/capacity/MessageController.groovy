package capacity

import grails.rest.RestfulController

/*Message Controller

Used to generate a connection between the messages in the
front end that are recieved via URL_mappings
 */
class MessageController extends RestfulController {
    //Random number used to generate a messageID
    Random random = new Random()
    static responseFormats = ['json', 'xml']

    //Constructor
    MessageController() {
        super(Message)
    }

    def index() {
    }

    // Method to create message.
    // Generates unique message ID that will pertain to the created message for lookup later.
    def createMessage() {
        System.out.print('Message being posted...\n')
        def messageText = params.text
        Random random = new Random()
        String messageID = (random.nextInt(100000 + 1 - 1) + 1).toString() // generate random int
        def googleID = params.googleID
        Boolean check = false

        // loop until new random message ID is generated
        while (!check) {
            def message = Message.find{messageID == messageID}
            def place = Place.find{googleID == googleID}
            if (message == null) {
                message = new Message(userName: 'Anonymous', voteCount: 0, text: messageText, messageID: messageID, googleID: googleID)
                message.save()
                place.addMessage(message)
                place.save()
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
        def messageID = params.messageID
        def message = Message.find{messageID == messageID}

        message.upvote()
    }

}
