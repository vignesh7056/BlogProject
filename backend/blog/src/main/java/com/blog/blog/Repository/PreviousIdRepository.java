package com.blog.blog.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.blog.blog.Model.PreviousId;

public interface PreviousIdRepository extends MongoRepository<PreviousId, String> {
    PreviousId findByType(String type);

    PreviousId save(PreviousId previousIdModel);
    
}
