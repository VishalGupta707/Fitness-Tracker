package com.Projects.ActivityService.Repository;

import com.Projects.ActivityService.Model.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Repository
public interface ActivityRepository extends MongoRepository<Activity,String> {
    List<Activity> findByUserId(String userId);
}
