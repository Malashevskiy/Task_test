import GoToSite from "../Page Object/Go_to_site.cy";
import CreateTaskPage from "../Page Object/create_task_page.cy";
describe('Tasks test', () => {
  const createTaskPage = new CreateTaskPage()
  const goToSite = new GoToSite()

  beforeEach(() => {
    goToSite.urlSite()
    createTaskPage.enterFirstTask()
    });
    
    it('Add new task', () => {
      createTaskPage.assertGoToTaskLine() 
      createTaskPage.assertContainsOneTask()
    })

    it('Mark task as completed', () => {
      createTaskPage.clickDoneBtn()
      createTaskPage.clearCompletedBtn()
      createTaskPage.assertConteinsZeroTask()
    })

    it('Delete task', () => {
      createTaskPage.clickDeliteBtn()
      createTaskPage.notContainsFirstTask()
      createTaskPage.assertNotContainsZeroTask()
    })

    it('Check task filtering', () => {
      createTaskPage.enterSecondTask()
      createTaskPage.enterThirdTask()
      createTaskPage.clickFirstTaskDone()
      createTaskPage.clickActiveBtn()
      createTaskPage.firstTaskIsVisible()
      createTaskPage.secondTaskIsVisible()
      createTaskPage.assertContainsSecondTask()
      createTaskPage.clickCompletedBtn()
      createTaskPage.firstTaskIsVisible()
    })
})


