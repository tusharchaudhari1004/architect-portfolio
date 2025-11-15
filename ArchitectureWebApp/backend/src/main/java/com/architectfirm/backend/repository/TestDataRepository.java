package com.architectfirm.backend.repository;

import com.architectfirm.backend.model.TestData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.swing.*;

    @Repository
    public interface TestDataRepository extends MongoRepository<TestData, String>{

    }

