package com.blog.blog.Services;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.blog.blog.Model.BlogModel;
import com.blog.blog.Repository.BlogRepository;
@Component

public class BlogServiceImpl implements BlogService{
    @Autowired
    private BlogRepository blogrepoobject;
    private Integer like;
    @Override
    public BlogModel create(BlogModel blogmodelobj){
        blogmodelobj.setDate(new Date());
        blogmodelobj.setLike(like);
        return blogrepoobject.save(blogmodelobj);
    }
   @Override
   public List<BlogModel> findAll(){
    return blogrepoobject.findAll();
   }
@Override
   public void delete(String id){
    blogrepoobject.deleteById(id);
}
@Override
public BlogModel update(BlogModel blogmodelobj){
    return blogrepoobject.save(blogmodelobj);
}

@Override
public BlogModel findById(String id) {
    return blogrepoobject.findById(id).get();
}
}