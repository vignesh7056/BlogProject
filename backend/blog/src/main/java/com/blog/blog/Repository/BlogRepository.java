package com.blog.blog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.blog.Model.BlogModel;

public interface BlogRepository extends MongoRepository<BlogModel, String>  {
    
}
