package com.todoapp.controller;

import com.todoapp.model.ToDo;
import com.todoapp.service.IToDoService;
import com.todoapp.service.serviceImplement.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToDoController {

    @Autowired
    private ToDoService toDoService;


    @GetMapping(value = "/api")
    public ResponseEntity<?> getAllToDo() {
        List<ToDo> toDoList = toDoService.getAllToDo();

        return ResponseEntity.ok().body(toDoList);
    }

    @PostMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addToDo(@RequestBody ToDo toDo) {
        return ResponseEntity.ok().body(toDoService.addToDo(toDo));
    }

    @PostMapping(value = "/addListToDo")
    public ResponseEntity<?> addToDo(@RequestBody List<ToDo> toDoList) {
        return ResponseEntity.ok().body(toDoService.addListToDo(toDoList));
    }
//

}
