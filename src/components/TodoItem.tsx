import { Trash2 } from "lucide-react"
import { Todo } from "../data/types/todo"

interface TodoItemProps {
    todo: Todo
    onCompletedChange: (id:number, completed: boolean) => void
    onDelete: (id:number) => void
}
export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
    return (
        <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 bg-white hover:bg-slate-300 grow" key={todo.id}>
                <input 
                type="checkbox" className="scale-125"
                checked={todo.completed} 
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}/>
                <span className={todo.completed ? "line-through text-gray-500":""}>
                    {todo.title}
                </span>
            </label>
            <button className="p-2"
                onClick={()=>onDelete(todo.id)}
            >
                <Trash2 size={20} className="text-gray-500"/>
            </button>
        </div>
    )
}