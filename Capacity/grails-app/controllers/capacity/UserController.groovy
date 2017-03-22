package capacity

import grails.plugin.springsecurity.annotation.Secured
import grails.web.RequestParameter
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.RequestParam

/*User Controller
*Used to generate a connection between the user information in the
* front end and authentication using spring in the backend
 */
class UserController {

    static responseFormats = ['json']

    //Uses a service class to save a user into the database
    def userService

    //Recieves a post call from the front end with two paramas (username and password) and responds with username
    def signUp(@RequestParameter('username') String username, @RequestParameter('password') String password) {
        log.debug("Signing up a new user: ${username}:[******]")
        def user = userService.signUp(username, password)
        def payload = [username: user.username] as Object
        respond payload, status: HttpStatus.CREATED
    }

    //Handles a thrown UserExistsException by creating an error and a BAD_REQUEST status (400)
    def handleUserExists(UserExistsException userExistsException) {
        def payload = [error: userExistsException.message] as Object
        respond payload, status: HttpStatus.BAD_REQUEST
    }

    //Handles a thrown IllegalArgumentException by creating an error and a BAD_REQUEST status (400)
    def handleIllegalArgument(IllegalArgumentException ex) {
        def payload = [error: ex.message] as Object
        respond payload, status: HttpStatus.BAD_REQUEST
    }
}
