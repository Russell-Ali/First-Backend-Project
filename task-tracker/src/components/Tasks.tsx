import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }: TasksType) => {
  return (
    <>
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
type TasksType = {
  tasks: any;
  onDelete: VoidFunction;
  onToggle: any;
};
export default Tasks;
