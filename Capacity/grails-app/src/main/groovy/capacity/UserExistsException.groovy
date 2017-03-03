package capacity

/**
 *
 */
class UserExistsException extends  Exception {
    UserExistsException() {
    }

    UserExistsException(String message) {
        super(message)
    }
}
