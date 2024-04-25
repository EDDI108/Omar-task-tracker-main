import {createAction, createActionGroup, props} from "@ngrx/store";
import {Task} from "../../models/task.model";
import {Status} from "../../models/status.model";


export const TaskActions = createActionGroup({
  source: 'TaskAPI',
  events: {
    'Load Tasks': props< {taskArray: Task[]}>(),            //загрузка списка задач (с массивом объектов Task)
    'Add Task': props<{ task: Task }>(),                    //добавление новой задачи
    'Remove Task': props<{ taskId: number }>(),             //удаление задачи по идентификатору
    'Set Status': props<{ taskId: number, status: Status }>(), //изменение статуса задачи по идентификатору
    'Add Executor': props<{ taskId: number, executorId: number }>(),  //добавление исполнителя к задаче
    'Remove Executor': props<{ taskId: number, executorId: number }>(),  //удаление исполнителя из задачи
    'Set Executors': props<{ taskId: number, executorsId: number[] }>()  // установка списка исполнителей для задачи
  },
});


