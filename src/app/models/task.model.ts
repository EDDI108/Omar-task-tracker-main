import { Priority } from "./priority.model";
import { Status } from "./status.model";

export interface Task {
[x: string]: any;
  taskId: number;
  heading: string;
  body: string;
  created: Date;
  deadline: Date;
  priority: Priority;
  status: Status;
  executorsId: number[];
}
