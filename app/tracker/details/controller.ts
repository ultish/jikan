import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import Task from 'jikan/models/task';

export default class TrackerDetails extends Controller {
  selectedTask: Task | null = null;
  searchText: String = '';

  @action
  async addTask(name: String) {
    let newTask = this.store.createRecord('task', {
      name: name
    });
    newTask = await newTask.save();

    const trackedTask = this.store.createRecord('trackedtask', {
      task: newTask,
      trackedDay: this.model.trackedDay
    });
    trackedTask.save();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'tracker/details': TrackerDetails;
  }
}
