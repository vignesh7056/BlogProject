package com.blog.blog.Model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.blog.blog.Repository.PreviousIdRepository;
import lombok.Data;

@Data
@Document(collection="previousId")
public class PreviousId {
    @Id
    private String id;
    private String type;
    private Integer previousId;
}
