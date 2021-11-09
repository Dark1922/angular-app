interface Task {
  title: string;
  description: string;
  dueDate: Date;

  priority: number;
  labels: Array<string>;
}
