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


    def getPlaceInfo() {
        System.out.println('request received.')
        def uname = params.userName
        def account = UserAccount.find{userName == uname}
        if(account!=null){
            respond account.getProfile().getPosts()
        }
        else{
            response.status = 404
        }
    }
}
