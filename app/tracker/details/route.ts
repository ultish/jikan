import Route from '@ember/routing/route';

export default class TrackerDetails extends Route {
  async model(params: any) {
    let date = Number.parseInt(params.date);

    const day = await this.store.queryRecord('trackedday', {
      filter: {
        date: date
      }
    });

    // let trackedTasks = [];
    // if (day) {
    let trackedTasks = await day.get('trackedTasks');
    // }
    const tasks = await this.store.findAll('task');

    return {
      trackedDay: day,
      trackedTasks: trackedTasks,
      tasks: tasks
    };
  }
}
