package com.blog.blog.Repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.blog.Model.UserModel;


public interface UserRepository extends MongoRepository<UserModel, String> {
   
  List<UserModel> findByEmail(String email);
}
