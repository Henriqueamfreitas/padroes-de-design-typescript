// Client 
class Publisher {
    constructor () {}

    publishContentOnPlatform(platform: Platform){
        console.log("Pubisher is ready to post your content")
        platform.postMedia()
    }
}


// Client Interface
abstract class Platform  {
    abstract postMedia() : void
}


// Compatible Services
class Instagram extends Platform {

    postMedia() {
        console.log("Instagram has published your post.")
    }
}


// Incompatible Service
class TikTok {
    constructor(){}

    scheduleMedia(){
        console.log("TikTok is ready to schedule your post.")
    }
}

// we cant do the below
// class TikTok2 extends Platform{
//     constructor(){}

//     scheduleMedia(){
//         console.log("TikTok is ready to schedule your post.")
//     }
// }

// Adapter 
class TikTokAdapter extends Platform {
    tikTok : TikTok
    constructor(tikTok : TikTok) {
        super()
        this.tikTok = tikTok
    }

    postMedia() {
        this.tikTok.scheduleMedia()
        console.log('Adapter has posted to tiktok')
    }
}

function adapterClient() {

    let publisher = new Publisher()
    let instagram = new Instagram()

    publisher.publishContentOnPlatform(instagram)
    
    // Using the Adapter 
    let tikTok = new TikTok()
    // publisher.publishContentOnPlatform(tikTok as any); // this breaks the code because 
    // tiktok has  schedulemeedia and not postmedia
    let tikTokAdapter = new TikTokAdapter(tikTok)

    publisher.publishContentOnPlatform(tikTokAdapter)

}

adapterClient()