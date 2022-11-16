package com.blog.blog.Services;


import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;


import com.blog.blog.Model.BlogModel;
import com.blog.blog.Model.PreviousId;
import com.blog.blog.Repository.BlogRepository;
import com.blog.blog.Repository.PreviousIdRepository;
@Component

public class BlogServiceImpl implements BlogService{
  
    @Autowired
    private BlogRepository blogrepoobject;
    @Autowired
    private PreviousIdRepository previousidrepositoryobject;

    @Override
    public BlogModel createBlog(BlogModel blogmodelobj){
        int size = getAllBlogs().size();
        blogmodelobj.set_id("BN"+ String.format("%03d",(size+1)) );
        return blogrepoobject.save(blogmodelobj);
    }

   @Override
   public List<BlogModel>getAllBlogs(){
    return blogrepoobject.findAll(Sort.by(Direction.DESC, "date"));
    // return blogrepoobject.findAll();
   }

   

    @Override
    public BlogModel updateBlog(BlogModel blogmodelobj){
        BlogModel blog = getBlogById(blogmodelobj.get_id());
        blog.setTitle(blogmodelobj.getTitle());
        blog.setContent(blogmodelobj.getContent());
        blog.setUsername(blogmodelobj.getUsername());
        return blogrepoobject.save(blog);
    }

    @Override
    public List<BlogModel> getBlogByUsername(String username) {
      return blogrepoobject.findByUsername(username);
    }
    
    
     @Override
     public BlogModel getBlogById(String id) {
        return blogrepoobject.findById(id).get();
       // return blogrepoobject.findById(id).get();
    }

    @Override
    public void deleteById(String id){
      blogrepoobject.deleteById(id);
  }
  @Override
  public BlogModel findblog(String id) {   //find blog by id
    Optional<BlogModel> optionalBlog = blogrepoobject.findById(id);
    if (!optionalBlog.isPresent())
    return null;

    return optionalBlog.get();
    //return optionalBlog.get();
}
// 

  @Override
  public BlogModel fetchBlogById(String id) {
    // TODO Auto-generated method stub
    return null;
  }

    // @Override
    // public Object findById(String id) {
    //   // TODO Auto-generated method stub
    //   return null;
    // }
    @Override
    public BlogModel addblog(BlogModel blogmodelobj)
    {
      PreviousId PreviousIdModel = previousidrepositoryobject.findByType( "blog");
      Integer PreviousBlogId = PreviousIdModel.getPreviousId();

      if(PreviousBlogId < 9){
      blogmodelobj.set_id("BN00"+ ++PreviousBlogId);
     }
     else{
      blogmodelobj.set_id("BN0" + ++PreviousBlogId);
     }
     PreviousIdModel.setPreviousId(PreviousBlogId);
     previousidrepositoryobject.save(PreviousIdModel);
     blogmodelobj.setDate(new Date());
     blogmodelobj.setLike(true);
     return blogrepoobject.save(blogmodelobj);
    }
    


}