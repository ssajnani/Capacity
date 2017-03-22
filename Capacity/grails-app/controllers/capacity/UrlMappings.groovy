package capacity

class UrlMappings {

    static mappings = {
    	"/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        
        "/api/search"(controller: "search", action: "search", method: "GET")
        "/api/signup"(controller: "user", action: "signUp", method: "POST")


        "/"(view:"/index")
        "/**"(view:"/index")
    }
}
