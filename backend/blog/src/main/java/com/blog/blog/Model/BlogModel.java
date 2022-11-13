
package com.blog.blog.Model;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "blog")

public class BlogModel {
    @Id
    private String _id;
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    @NotBlank
    private String username;
    private Date date = new Date();
    private boolean like;
    private boolean unlike;
    private List<String> likedUsers;
    private List<String> unlikedUsers;  
}


