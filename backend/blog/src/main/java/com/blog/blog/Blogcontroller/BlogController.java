package com.blog.blog.Blogcontroller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/blog")

public class BlogController {
    @Autowired
    private BlogService blogserviceobj;


    @GetMapping
    public List<BlogModel>getAllBlogs(){
       return blogserviceobj.getAllBlogs();
    }
   
    @PatchMapping("/update")       // update a blog(edit blog)
    public BlogModel updateBlog(@RequestBody BlogModel blogmodelobj){
        return blogserviceobj.updateBlog(blogmodelobj);
    } 

    @GetMapping("/{username}")  // get blog by username
    public List<BlogModel> getBlogsByUsername(@PathVariable String username){
       return blogserviceobj.getBlogByUsername(username); 
    }

    @DeleteMapping("/id/{id}")     //deleteblog
    public void deleteById(@PathVariable String id){
        blogserviceobj.deleteById(id);
    }
    /////////
    // @GetMapping("/blogdata/{id}")      //unwanted
    // public BlogModel getBlogById(@PathVariable String id ){
    //     return blogserviceobj.getBlogById(id);
    // }
    @GetMapping("/blogdata/id/{id}")   // find blog by id 
    public BlogModel findblog(@PathVariable String id){
        // System.out.println("fejvnjekvfen " + id);
      return blogserviceobj.findblog(id);
    }
    @PostMapping("/add")     //add blog page(post a blog)
    public BlogModel addblog(@RequestBody BlogModel blogmodelobj){
        return blogserviceobj.addblog(blogmodelobj);
        
    }
    @PatchMapping("/like/{blogId}/{userId}")    // like a post
    public BlogModel getLikes(@PathVariable("blogId") String blogId, @PathVariable("userId") String userId){
   return blogserviceobj.getLikes(blogId, userId);
    }
    @PatchMapping("/unlike/{blogId}/{userId}")   // dislike a post
    public BlogModel removeLikes(@PathVariable("blogId") String blogId, @PathVariable("userId") String userId){
   return blogserviceobj.removeLikes(blogId, userId);
    }
    }
