//a.js
class A {
    mymethod(){

    }
}
export default A
//b.js
import A from './a'
class B {
    mymethod2(){
        new A().mymethod() //React does not show us how the component is rendered, hence the Lifecycle methods
    }
}