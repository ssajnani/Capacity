package capacity

/**
 *An Exception that is thrown if signUp finds that a user exists already
 */
class UserExistsException extends  Exception {
    UserExistsException() {
    }

    UserExistsException(String message) {
        super(message)
    }
}
