package com.architectfirm.backend.controller;

import com.architectfirm.backend.model.TestData;
import com.architectfirm.backend.repository.TestDataRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DatabaseTestController {

    private final TestDataRepository repository;

    public DatabaseTestController(TestDataRepository repository){
        this.repository = repository;
    }

    @GetMapping("/api/test/db/save")
    public String saveTestData() {
        TestData data = new TestData("MongoDB is connected! " + System.currentTimeMillis());
        TestData saved = repository.save(data);
        return "Saved message with ID: " + saved.getId();
    }

    @GetMapping("/api/test/db/all")
    public List<TestData> getAll() {
        return repository.findAll();
    }




}
