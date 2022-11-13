package com.blog.blog.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.blog.blog.Model.BlogModel;
import com.blog.blog.Repository.BlogRepository;
@Component

public class BlogServiceImpl implements BlogService{
    @Autowired
    private BlogRepository blogrepoobject;

    @Override
    public BlogModel createBlog(BlogModel blogmodelobj){
        int size = getAllBlogs().size();
        blogmodelobj.set_id("BN"+ String.format("%03d",(size+1)) );
        return blogrepoobject.save(blogmodelobj);
    }

   @Override
   public List<BlogModel>getAllBlogs(){
    return blogrepoobject.findAll();
   }

   

    @Override
    public BlogModel updateBlog(BlogModel blogmodelobj){
        BlogModel blog = getBlogById(blogmodelobj.get_id());
        blog.setTitle(blogmodelobj.getTitle());
        blog.setContent(blogmodelobj.getContent());
        blog.setUsername(blogmodelobj.getUsername());
        return blogrepoobject.save(blog);
    }

    @Override
    public List<BlogModel> getBlogByUsername(String username) {
      return blogrepoobject.findByUsername(username);
    }

    public BlogModel getBlogById(String id) {
        return blogrepoobject.findById(id).get();
    }

    @Override
    public void deleteById(String id){
      blogrepoobject.deleteById(id);
  }

}