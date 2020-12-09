package com.example.controllers;


import com.example.models.WishDetails;
import com.example.repository.WishDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class WishController {


    @Autowired
    private WishDetailsRepository wishDetailsRepository;

   /* @ResponseBody
    @RequestMapping(path = "wishtree")
    public String addWish() {
        WishDetails wishDetails = new WishDetails();
        wishDetails.setWishId(1);
        wishDetails.setEmployeeId(992171);
        wishDetails.setEmployeeName("Anil");
        wishDetails.setEmailId("anil.np@oracle.com");
        wishDetails.setPhoneNumber(787523);
        wishDetails.setWishDetails("madcap");
        wishDetails.setWishTaken(true);
        wishDetailsRepository.save(wishDetails);
        return "Details Saved";
    }*/

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, path = "wishtree")
    public String testEndpoint(@RequestBody WishDetails wishDetails) {
       String message= "No Response";
        try {
            wishDetailsRepository.save(wishDetails);
            message = "Details Saved Successfully";
        }
        catch (Exception e) {
            message = "Details not saved. Contact anil.np@oracle.com";

        }
        finally {
            return message;
        }
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, path="wishtreedetails")
    public List<WishDetails> fetchWishDetails() {
        return (List<WishDetails>) wishDetailsRepository.findAll();
    }
}
