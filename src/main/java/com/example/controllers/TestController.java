package com.example.controllers;

import org.springframework.web.bind.annotation.*;

import javax.ws.rs.core.Response;
import java.util.logging.Logger;


@RestController
public class TestController {

    @RequestMapping(method = RequestMethod.GET, path = "greetings")
    public String testEndpoint(@RequestParam(value = "param") String name) {
        System.out.println("End point is hit :"+name);
        Logger.getLogger("test");
        return "Hello " + name;

    }


    @RequestMapping("helloworld")
    //@Produces(TEXT_PLAIN)
    public Response testEntry() {
        System.out.println("test entry end point hit");
        return Response.ok("helloworld").build();
        //return Response.ok().build();
    }
}
