package com.blog.blog.Services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import com.blog.blog.Model.UserModel;
import com.blog.blog.Repository.UserRepository;
@Component
public class UserServiceImpl implements UserService {
@Autowired
private UserRepository userrepositoryobj;
    @Override
     public UserModel create(UserModel user) {
        return userrepositoryobj.save(user);
    }

    
     @Override
     public UserModel findById(String id) {
        
     return userrepositoryobj.findById(id).get();
    }

    @Override
    public void delete(String id) {

       userrepositoryobj.deleteById(id);
        
    }

     @Override
     public UserModel update(UserModel user) {
        
     return userrepositoryobj.save(user);
    }

    @Override
    public List<UserModel> findAll() {
        
        return userrepositoryobj.findAll();
    }

    
    
}
