package com.architectfirm.backend.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "testdata")
public class TestData {
    @Id
    private String id;
    private String message;

    public TestData(){}
    public TestData(String message){
            this.message = message;
    }


    public String getId()
    {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }
    public void setMessage(){
        this.message = message;
    }
}


