package com.example.jobportal.service;

import com.example.jobportal.model.Job;
import com.example.jobportal.repository.JobRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class JobService {
    private final JobRepository jobRepository;
    public JobService(JobRepository jobRepository) { this.jobRepository = jobRepository; }

    public List<Job> getJobs(String keyword, String location) {
        return jobRepository.search(blankToNull(keyword), blankToNull(location));
    }
    public Job getJob(Long id) {
        return jobRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Job not found: " + id));
    }
    public Job createJob(Job job) { return jobRepository.save(job); }

    private String blankToNull(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }
}
