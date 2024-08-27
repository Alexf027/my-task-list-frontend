import { instancia1 } from "./axios";

export const getTasksResquest = () => instancia1.get("/list-view/tasks");

export const getTaskResquest = (id) => instancia1.get(`/list-view/tasks/${id}`);

export const getTasksCompletedResquest = () => instancia1.get("/list-view/completed");

export const getTasksIncompleteResquest = () => instancia1.get("/list-view/incomplete");

export const createTaskRequest = (task) => instancia1.post("/list-edit/create", task);

export const updateTaskRequest = (id, task) => instancia1.put(`/list-edit/update/${id}`, task);

export const deleteTaskRequest = (id) => instancia1.delete(`/list-edit/delete/${id}`);

