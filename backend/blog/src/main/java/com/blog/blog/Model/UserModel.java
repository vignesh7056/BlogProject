package com.blog.blog.Model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "user")
public class UserModel {
    @Id
    private String _id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String dob;
    private Date createdAt;
}