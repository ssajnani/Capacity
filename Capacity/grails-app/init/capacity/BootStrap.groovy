import capacity.*

class BootStrap {

    def init = { servletContext ->
        def role = new Role(authority: 'ROLE_USER').save()
        def user = new User(username: 'test', password: '2212').save()
        UserRole.create(user, role, true)
    }
    def destroy = {
    }
}