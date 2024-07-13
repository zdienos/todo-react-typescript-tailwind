import { Todo } from "../data/types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}
export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo=>todos.completed)

    return (
        <div className="text-center space-y-2">
            <p>
                {completedTodos.length} of {todos.length} completed</p>
        </div>
    )
}