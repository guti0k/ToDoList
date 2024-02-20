package com.todoapp.service;

import com.todoapp.model.ToDo;

import java.util.List;

public interface IToDoService {

    public List<ToDo> getAllToDo();

    public ToDo addToDo(ToDo toDo);

    public List<ToDo> addListToDo(List<ToDo> listToDo);
}
