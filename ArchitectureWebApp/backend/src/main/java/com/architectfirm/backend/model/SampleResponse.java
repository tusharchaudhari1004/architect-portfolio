package com.architectfirm.backend.model;

public class SampleResponse {

    private String message;
    private int status;


    public SampleResponse(String message, int status)
    {
        this.message = message;
        this.status = status;
    }

    public String getMessage(){
        return message;
    }
    public int getStatus(){
        return status;
    }


}
