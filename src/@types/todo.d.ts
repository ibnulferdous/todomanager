export interface ITodo {
  id?: string;
  todoText: string;
  isCompleted?: boolean;
  createdAt?: Date;
}

export type TodoContextType = {
  todosArray: Itodo[];
  addTodo: (input: ITodo) => void;
  updateStatus: (todo: ITodo) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  deleteAllTodos: () => void;
  deleteCompletedTodos: () => void;
};

export interface ISingleTodo {
  key: string;
  todo: Itodo;
}

export interface INormalStateButton {
  handleUpdate: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}

export interface IEditStateButtons {
  handleSaveEdit: () => void;
  handleCancleEdit: () => void;
}
