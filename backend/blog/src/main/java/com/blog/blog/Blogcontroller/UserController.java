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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blog.Model.UserModel;
import com.blog.blog.Services.UserService;
import com.blog.blog.Services.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public UserModel signUp(@RequestBody UserModel user){
        return userService.signUp(user);
    }


    @PostMapping("/signin")
    public boolean signin(@RequestParam String username, @RequestParam String password){
        return userService.signin(username, password);
    }




    @GetMapping("/all")
    public List<UserModel>getAllUsers(){
        return userService.findAll();
    }

    @GetMapping("/id/{id}")
    public UserModel getUsersById(@PathVariable String id){
        return userService.findById(id);
    }

    @PostMapping("/create")
    public UserModel generate(@RequestBody UserModel user){
        return userService.create(user);
    }

    @PutMapping("/update")
    public UserModel edit(@RequestBody UserModel user){
        return userService.update(user);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable String id){
        userService.delete(id);
    }

}
