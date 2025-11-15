package com.architectfirm.backend.controller;

import com.architectfirm.backend.model.SampleResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public String hello(){
        return "Hello from Tushar";
    }

    @GetMapping("/api/test/json")
    public SampleResponse testJson(){

        return new SampleResponse("Hello guys, this is test message.", 3000);
    }
}
