import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTaskById(id) {
  let result = await taskRepository.findById(id);
  console.log(result)
  if(result) return result;
  else {
    const error = new Error(`Cannot find category with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
