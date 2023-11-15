import RandomHelper from "../helper/Random_helper.cy";
import Locators from "./Lonators.cy";
const taskName = RandomHelper.generateTaskName();
console.log(taskName)
class CreateTaskPage{

  enterFirstTask(task){
    return cy.get(Locators.searchFild).type(taskName.firstTask)
  }
  
  enterSecondTask(task){
   return cy.get(Locators.searchFild).type(taskName.secondTask)
 }

 enterThirdTask(task){
   return cy.get(Locators.searchFild).type(taskName.thirdTask)
 }

  assertGoToTaskLine(){
    return cy.get(Locators.taskLine).should('be.visible')
  }

  clickDoneBtn(){
    return cy.get(Locators.doneBtn).click()
  }
  clickFirstTaskDone(){
   return cy.get(Locators.doneBtn).eq(0).click()
 }

  clickDeliteBtn(){
    return cy.get(Locators.deliteBtn).invoke('show').click()
  }

  clearCompletedBtn(){
    return cy.get(Locators.completedBtn).should('be.visible')
  }

   clickActiveBtn(){
     return cy.contains('Active').click() 
   }

   clickCompletedBtn(){
     return cy.contains('Completed').click()
   }

   assertContainsFirstTask(){
     return cy.contains(taskName.firstTask).should('be.visible')
   }

   assertContainsOneTask(){
    return cy.contains('1 item left').should('be.visible')
   }

   assertConteinsZeroTask(){
    return cy.contains('0 items left').should('be.visible')
   }

   assertContainsSecondTask(){
      return cy.contains('2 items left').should('be.visible');
   }

  assertContainsThirdTask(){
     return cy.contains(taskName.thirdTask).should('be.visible');
  }
  
  notContainsFirstTask(){
    return cy.contains(taskName.firstTask).should('not.exist');
  }

  assertNotContainsZeroTask(){
    return cy.contains('0 items left').should('not.exist');
  }

  firstTaskIsVisible(){
    return cy.get(Locators.taskLine).eq(0).should('be.visible')
  }

  secondTaskIsVisible(){
    return cy.get(Locators.taskLine).eq(1).should('be.visible')
  }


}
export default CreateTaskPage
