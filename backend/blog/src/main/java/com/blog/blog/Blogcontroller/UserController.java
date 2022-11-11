package com.blog.blog.Blogcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blog.Model.UserModel;
import com.blog.blog.Services.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userServiceimplobj;

    @GetMapping("/all")
    public List<UserModel>getAllUsers(){
        return userServiceimplobj.findAll();
    }

    @GetMapping("/id/{id}")
    public UserModel getUsersById(@PathVariable String id){
        return userServiceimplobj.findById(id);
    }

    @PostMapping("/create")
    public UserModel generate(@RequestBody UserModel user){
        return userServiceimplobj.create(user);
    }

    @PutMapping("/update")
    public UserModel edit(@RequestBody UserModel user){
        return userServiceimplobj.update(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable String id){
        userServiceimplobj.delete(id);
    }

}
