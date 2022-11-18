package com.blog.blog.Services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
   public List<BlogModel>getAllBlogs(){       // /blog
     return blogrepoobject.findAll();
   }
    @Override
    public BlogModel updateBlog(BlogModel blogmodelobj){  //edit blog
        BlogModel blog = getBlogById(blogmodelobj.get_id());
        blog.setTitle(blogmodelobj.getTitle());
        blog.setContent(blogmodelobj.getContent());
        blog.setUsername(blogmodelobj.getUsername());
        return blogrepoobject.save(blog);
    }
    @Override              // get blog by username
    public List<BlogModel> getBlogByUsername(String username) {
      return blogrepoobject.findByUsername(username);
    }
     @Override
     public BlogModel getBlogById(String id) {
        return blogrepoobject.findById(id).get();
    }

    @Override           // deleteblog
    public void deleteById(String id){
      blogrepoobject.deleteById(id);
  }
  @Override
  public BlogModel findblog(String id) {   //find blog by id
    Optional<BlogModel> optionalBlog = blogrepoobject.findById(id);
    if (!optionalBlog.isPresent())
    return null;

    return optionalBlog.get();
  }
    @Override
    public BlogModel addblog(BlogModel blogmodelobj)   // post blog
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
     
     return blogrepoobject.save(blogmodelobj);
    }
    @Override
 /// like a post
    public BlogModel getLikes(String blogId, String userId){    //get like
      BlogModel blogmodelobj =blogrepoobject.findById(blogId).get();
      List<String> likes = blogmodelobj.getLikes();
      likes.add(userId);
      blogmodelobj.setLikes(likes);
      return blogrepoobject.save(blogmodelobj);
    }
    @Override
// dislike a post
    public BlogModel removeLikes(String blogId, String userId){ // remove like
      BlogModel blogmodelobj =blogrepoobject.findById(blogId).get();
      List<String> likes = blogmodelobj.getLikes();
      likes.remove(userId);
      blogmodelobj.setLikes(likes);
      return blogrepoobject.save(blogmodelobj);
    }
   
    }
    


