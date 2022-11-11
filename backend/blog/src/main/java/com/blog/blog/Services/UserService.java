package com.blog.blog.Services;
import com.blog.blog.Model.UserModel;
import java.util.List;

public interface UserService {
    UserModel create (UserModel usermodelobj);

    List<UserModel> findAll();

    UserModel findById(String id);

    void delete(String id);

    UserModel update(UserModel usermodelobj);

}