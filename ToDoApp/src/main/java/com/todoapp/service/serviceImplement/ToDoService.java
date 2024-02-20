package com.todoapp.service.serviceImplement;

import com.todoapp.model.ToDo;
import com.todoapp.repository.ToDoRepository;
import com.todoapp.service.IToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService implements IToDoService {

    @Autowired
    private ToDoRepository toDoRepository;

    @Override
    public List<ToDo> getAllToDo() {
        return toDoRepository.findAll();
    }

    @Override
    public ToDo addToDo(ToDo toDo) {
        return toDoRepository.save(toDo);
    }

    @Override
    public List<ToDo> addListToDo(List<ToDo> listToDo) {
        return toDoRepository.saveAll(listToDo);
    }
}
