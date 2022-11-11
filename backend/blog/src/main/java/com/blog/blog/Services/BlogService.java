package com.blog.blog.Services;

import java.util.*;

import com.blog.blog.Model.BlogModel;

public interface BlogService {
    
    BlogModel create(BlogModel blogmodelobj);

    List<BlogModel>findAll();

    void delete(String id);

    BlogModel update(BlogModel blogmodelobj);
    BlogModel findById(String id);
}
