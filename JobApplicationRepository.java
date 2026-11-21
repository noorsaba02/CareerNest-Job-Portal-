package com.example.jobportal.repository;

import com.example.jobportal.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    List<JobApplication> findByJob_Id(Long jobId);

    boolean existsByJob_IdAndEmailIgnoreCase(
            Long jobId,
            String email
    );
}