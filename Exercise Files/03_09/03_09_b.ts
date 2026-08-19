// Subsystem Class
abstract class Post  {
	abstract post() : void
}



class InstagramPost extends Post {

    post() : void {
        console.log(("Posting to Instagram")) 
    }
}

class TikTokPost extends Post {

    post() : void {
        console.log(("Posting to TikTok")) 
    }
}

class TwitterPost extends Post {

    post() : void {
        console.log(("Posting to Twitter")) 
    }
}

// Facade
class Publisher  {
	private instagram = new InstagramPost()
	private tikTok = new TikTokPost()
	private twitter = new TwitterPost()

    
    publish() : void {
        this.instagram.post()
        this.tikTok.post()
        this.twitter.post()
    }
}

// Facade provides a simple interface over a more complex subsystem.
// Without Facade, the client would need to do:
// const instagram = new InstagramPost();
// const tikTok = new TikTokPost();
// const twitter = new TwitterPost();

// instagram.post();
// tikTok.post();
// twitter.post();
// With Facade, the client only does:
// const publisher = new Publisher();
// publisher.publish();
// What Is The Advantage?
// The client does not need to know:
// which platforms exist
// how to instantiate each one
// the correct order
// which methods to call
// It only knows:
// publisher.publish();
// Client
function publisherClient() {
    const publisher = new Publisher()
    publisher.publish()
}


publisherClient()