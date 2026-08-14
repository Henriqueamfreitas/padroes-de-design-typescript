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