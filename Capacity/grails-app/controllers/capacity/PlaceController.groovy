package capacity

import grails.rest.RestfulController

class PlaceController extends RestfulController{

    static allowedMethods = ['getPlaceInfo']
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

        System.out.println('Request for place data recieved.\n')
        def googleID = params.googleID
        def place = Place.find{googleID == googleID}

        if(place != null){
            respond place.getBoard().getMessages()
            System.out.print('Messages retrieved.')
            response.status = 200
        }
        else {
            System.out.print('New place needs to be created.')
            message = new Place(googleID: googleID, board: messageboard)
            System.out.print('New place created.\n')
            response.status = 200
            check = true
        }
    }
}
