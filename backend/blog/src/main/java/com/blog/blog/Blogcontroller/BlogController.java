package com.blog.blog.Blogcontroller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
@GetMapping("/all")
public List<BlogModel>getAllBlogs(){
    return blogserviceobj.findAll();
}
@GetMapping("/id/{id}")
public BlogModel getBlogsById(@PathVariable String id){
   return blogserviceobj.findById(id); 
}
@PostMapping("/create")
    public BlogModel make(@RequestBody BlogModel blogmodelobj)
    {
    return blogserviceobj.create(blogmodelobj);
}
@PostMapping("/update")

public BlogModel update(@RequestBody BlogModel blogmodelobj){
    return blogserviceobj.update(blogmodelobj);
} 
@DeleteMapping("/delete/{id}")
public void deleteById(@PathVariable String id){
    blogserviceobj.delete(id);
}
}
