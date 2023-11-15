class RandomHelper {

  static generateTaskName() {
    const firstTask = `task${Math.floor(Math.random() * 10000)}{enter}`;
    const secondTask = `task${Math.floor(Math.random() * 10000)}{enter}`;
    const thirdTask = `task${Math.floor(Math.random() * 10000)}{enter}`;
    const fourTask = `task${Math.floor(Math.random() * 10000)}{enter}`;
    const fiveTask = `task${Math.floor(Math.random() * 10000)}{enter}`;

    return {
      firstTask,
      secondTask,
      thirdTask,
      fourTask,
      fiveTask,
    };
  }
}
  export default RandomHelper