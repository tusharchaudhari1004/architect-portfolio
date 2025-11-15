package com.architectfirm.backend.controller;

import com.architectfirm.backend.model.UserRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/api/user")
    public  String  receiveUser(@RequestBody UserRequest request)
    {
        return "Received User: " + "NAME: " + request.getName() + " AGE: " + request.getAge();
    }



}
