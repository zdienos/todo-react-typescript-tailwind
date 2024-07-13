import { Todo } from "../data/types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}
export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo=>todo.completed)

    return (
        <div className="text-center space-y-2">
             {todos.length !== 0 && (
            <p>
                {completedTodos.length} of {todos.length} completed
            </p>
            )}
            { completedTodos.length > 0 && (
                <button
                    className="text-sm text-red-500"
                    onClick={deleteAllCompleted}
                >
                    Delete all completed
                </button>
            )   
            }
        </div>
    )
}