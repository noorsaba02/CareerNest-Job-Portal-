package com.example.jobportal.repository;

import com.example.jobportal.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    @Query("select j from Job j where " +
           "(:keyword is null or lower(j.title) like lower(concat('%', :keyword, '%')) " +
           "or lower(j.company) like lower(concat('%', :keyword, '%'))) and " +
           "(:location is null or lower(j.location) like lower(concat('%', :location, '%')))")
    List<Job> search(@Param("keyword") String keyword, @Param("location") String location);
}
