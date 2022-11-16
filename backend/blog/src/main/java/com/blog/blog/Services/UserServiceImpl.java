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

    public UserModel signUp(UserModel user){
        UserModel response = new UserModel();
        if(!user.getEmail().isEmpty() && !user.getPassword().isEmpty() & !user.getName().isEmpty() ){
        //   user.set_id("UN"+ String.format("%03d",(userList().size()+1)) );
          user.set_id("UN"+ String.format("%03d",(userList().size()+1)) );
          response = userrepositoryobj.save(user);
        }
        return response;
    }

    private List<UserModel> userList(){
        return userrepositoryobj.findAll();
    }

    // public boolean signin(String email, String password){
    //     boolean valid = false;
    //     if(email!=""){
    //         List<UserModel> user = userrepositoryobj.findByEmail(email);
    //         if(user.size()>0){
    //             if(user.stream().findFirst().get().getPassword().equals(password)){
    //                 valid=true;
    //             }
    //         }    
    //     }
    //     return valid;
    // }
    public UserModel signin(UserModel user) {
        UserModel userobj = userrepositoryobj.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (userobj == null)
            return null;
        return userobj;
    }








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

