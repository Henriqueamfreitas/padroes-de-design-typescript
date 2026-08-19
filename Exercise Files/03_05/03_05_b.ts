// Component Interface 
abstract class Member  {
    abstract printMemberInfo() : void
}
 

 // Leaf 
class TeamMember extends Member {
    name : string
    teamNumber: number 
    position : string 

    constructor(name: string, teamNumber: number, position: string) {
        super()
        this.name = name
        this.teamNumber = teamNumber
        this.position = position
    }

    printMemberInfo(): void {
        console.log("Name: %s Team Number: %d Position: %s\n", 
        this.name, this.teamNumber, this.position)
    }

}
 
 

// Composite
 class Roster extends Member {
     members : Member[] = []
     name : string 
 
     constructor(name: string) {
         super()
         this.name = name
     }
 
    printMemberInfo(): void {
        console.log("Here's the roster for team: " + this.name)
        for(let i = 0; i < this.members.length; i++) {
            this.members[i].printMemberInfo()
        }
    }
 
     add(m : Member) : void{
         this.members.push(m)
     }
 }
 

 function compositeClient() {
    const member1 = new TeamMember("PH Ganso", 10, "Midfielder")
    const member2 = new TeamMember("Neymar Jr", 11, "Forward")
    const member3 = new TeamMember("rogerio", 1, "goalkeeper")

    const roster = new Roster("Brazil National Team")
    roster.add(member1)
    roster.add(member2)
    roster.add(member3)
    roster.printMemberInfo()
 }
 
 compositeClient()
 