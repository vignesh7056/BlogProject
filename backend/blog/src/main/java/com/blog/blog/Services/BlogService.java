package com.blog.blog.Services;

import java.util.*;

import com.blog.blog.Model.BlogModel;

public interface BlogService {
    
    List<BlogModel>getAllBlogs();

    BlogModel createBlog(BlogModel blogmodelobj);

    BlogModel updateBlog(BlogModel blogmodelobj);

    List<BlogModel> getBlogByUsername(String username);

    void deleteById(String id);

}