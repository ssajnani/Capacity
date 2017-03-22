package capacity

import grails.rest.RestfulController
import grails.converters.JSON

/*Place Controller

Used to generate a connection between the places/google Maps in the
front end that are recieved via URL_mappings to a function
 */
class PlaceController extends RestfulController{

    //static allowedMethods = ['getPlaceInfo']
    static responseFormats = ['json', 'xml']

    PlaceController() {
        super(Place)
    }

    def index() {

    }

    // Retrieves place data for frontend.
    // If Google ID is new, it must be a new location, therefore
    // generate a new place object.
    def getPlaceInfo() {
        // Begin place retrieval..
        System.out.println('Request for place data received.\n')
        def googleID = params.googleID
        def place = Place.find{googleID == googleID}

        // if place exists, retrieve data
        if(place != null) {
            def gID = place.getGoogleID()
            def messageList = place.getMessageList()
            render (['googleID': gID, 'messages': messageList] as JSON)
            System.out.print('Place retrieved.')
            response.status = 200
        }
        // new place, create place object and respond with data
        else {
            System.out.print('New place needs to be created. ')
            place = new Place(googleID: googleID)
            place.save()
            def gID = place.getGoogleID()
            def messageList = place.getMessageList()
            render (['googleID': gID, 'messages': messageList] as JSON)
            System.out.print('New place created.\n')
            response.status = 200
        }
    }
}
