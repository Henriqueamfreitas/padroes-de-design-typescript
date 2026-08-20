creational patterns
structural patterns
  allow incompatible object types to colaborate
behavioral patterns
  pass info along to different objects

POO principles
  classes
    creating objects
  inheritance
    extends.. Dog extends animal.. dog object can excute the dog method and animal method
  encapsulation
    public/private/protector
  abstraction
    hiding and exposing the necessary parts
  polymorphism
    super key words (like extending the method)

classification
  object creational patterns
    objkect to object
  class creational patterns
    class to subclass

usecases
  diffrent respresentation for complec
  hiding immplemtnations
  restrincting number pof instanes

creational patterns
  builder pattern
    enable you to construct objects step by step
    each step is independent
    get rid of telescoping constructor
    pros
      you can resude the same constructor code
    isolte complex parts of the coe
    cons
      makes code more complex
  

  factory method pattern 
    define interfcae or abstract class for crreating an object
    usages
      you dont know the exact dependencies of the objects on your codebase (body that comes from outside?)
      allow reuse existing objects
    pros
      promotes loose coupling
      class creation into one sigl place
    cons
      too many subclasses
  
  abstract factory pattern
    are created using a set of facotory methods
    define a class for creating a family of related objects
    difference between facotry and abstract
      The first one hides the contruction of one product it would have. uses encapsulation
      the second hides the construction of a family of similiar products. uses composition
      the second is one step above the first
    usages
      dont know the exact dependencies of the family of classes
    pros
      ensure all related classes are working together properly
      loose coupling
      creation in one singular place
    cons
      more complexity
    Without this pattern, someone could do:
      const chair = new ModernChair();
      const table = new VictorianTable();
      Maybe that is not allowed in your domain because a room should have one consistent style.
  
  prototype pattern
    Creates a coppy of the object without being costly
    objects code is not dependent on its classes
    usages
      the code isnt dependent on spceifi classes or objects
      reducing amount of subclasses
      classes are intiliazed only at runtime
    pros
      2 different objects wont be coupled
      changes on one dont affect the other
      removes repeated intiliazrion
    cons
      complex objetcs can be tough to copy
  
  singleton pattern
    single classs creates an object
    this class makes sure that only one getss created
    usages
      enrusre that a class has one single instance
      provide global access point for that class
    the only way for client access the ingleton instance is through the getinstance
    pros
      only one object created
      global accsesss
      only initiliazed the first time
    cons
      goes against the sinfle responsibility problem
      dificult to test
      problem iin multoithred environment


STRUCTURAL PATTERNS
  usecases
    incompatible interfaces to colaborate with each other
    compsing objects into a tree
    crete a implified interface
  adapter
  composite
  decorator
  facade

  adapter pattern
    is a brdge between two incompatible classes
    uses a single interface to join diferent functinoaçllities
    usages
      reuse subclases that dont have common functionality
    type
      object
        implements interface of one and wraps the other
      class
        inherits interface from objetcs at the same time (not all programing languages)
    pros
      single responsibilty principle
      open closed principle
    cons
      more complex with more interfaces and classes
  
  composite pattern
    composes object in a tree like structure
    objetcs in that strcutrue are tretated in the same way
    usages
      simple and complex objects to behave the same way
    pros
      makes tree structures convenient
      open closed principle    
    cons
      dificulte to provide a common interface
  
  decorator pattern
    dinamically adds functionality to the behavior of a single object
    decordator classes wrap the oringal object
    doesnt affect the objetcs within tha class
    usages
      when you need to assing extra behavior to objects
      when its difficult to exntend behavior with inheritance
    pros
      more flexibe alternative than subclassing
      easier to add//remove resposibilities
      single responsibility principle
    cons
      tircky to set up initially
      may be difficult to add dependencies
  
  facade pattern 
    hides the complexities of a complex set of classes - framework
    uses one single class
    more generic functionality
    usage
      lmited but straughtforward interface to a complex system
      sructure system into layers
    pros
      isolate compleixty of your code
    cons
      create relations that shoudl not exist

BEHAVIORAL PATTERNS
  usecases
    traversing through elements in a collection
    reducing dependenct between objects
    altering behaviors of an objectdefinding a group of algortims
    comunication between objects
  iterator pattern
    traverse trhough elements of a collection wihtou knowing the sctructure
    usage
      iding complex data
      deduce duplicate code
      unknow data structure
    pros
      single repsonsibility principle
      open closed principle - add aditional code wihtout breaking the code
    cons
      only works with simple collections
      can be less efficient
  state patern
    object oriented state machine
    allows for objects to alter behavior depending on the state
    object appears to have changed its class
    usages
      object the behaves differently depending on the state
      if you have a bunch of conditionals in a class
      if you want to reduce duplciate code across diferent classes
    pros
      single repsonsibility principle
      open closed principle
    cons
      excessive and make codebase less eficient depending on the case

  template method patern
  command patern
  mediator patern



Pattern | Problem it solves | Raw code smell | When to use | When not to use
Builder   | creating objects | 
Factory Method | 
Abstract Factory
Prototype : duplicate heavy objetcs
Singleton | instance the class or smetihng only once
Adapter | external apis with differnent methods
Composite | creating/grouping
Decorator | when you want to something to the subclass without editing the orignal one 
Facade | when there are class with the same method, but they do their thins on their ow way... you dont need to do how they doit, just call the method for all of them