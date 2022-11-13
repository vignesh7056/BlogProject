package com.blog.blog.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.blog.Model.BlogModel;

public interface BlogRepository extends MongoRepository<BlogModel, String>  {

  List<BlogModel> findByUsername(String username);

    
}