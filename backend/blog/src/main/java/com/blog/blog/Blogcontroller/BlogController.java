package com.blog.blog.Blogcontroller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.blog.Model.BlogModel;
import com.blog.blog.Services.BlogService;
@RestController
@RequestMapping("/blog")

public class BlogController {
    @Autowired
    private BlogService blogserviceobj;


    @GetMapping
    public List<BlogModel>getAllBlogs(){
       return blogserviceobj.getAllBlogs();
    }

    @PostMapping("/create")
    public BlogModel make(@RequestBody BlogModel blogmodelobj){
    return blogserviceobj.createBlog(blogmodelobj);
}

    @PatchMapping("/update")
    public BlogModel updateBlog(@RequestBody BlogModel blogmodelobj){
        return blogserviceobj.updateBlog(blogmodelobj);
    } 


    @GetMapping("/{username}")
    public List<BlogModel> getBlogsByUsername(@PathVariable String username){
       return blogserviceobj.getBlogByUsername(username); 
    }


    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id){
        blogserviceobj.deleteById(id);
    }
}
