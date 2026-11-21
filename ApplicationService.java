package com.example.jobportal.service;

import com.example.jobportal.model.Job;
import com.example.jobportal.model.JobApplication;
import com.example.jobportal.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final JobService jobService;
    private final JobApplicationRepository applicationRepository;

    public ApplicationService(
            JobService jobService,
            JobApplicationRepository applicationRepository) {

        this.jobService = jobService;
        this.applicationRepository = applicationRepository;
    }

    public JobApplication apply(Long jobId, JobApplication application) {

        // Find the job using the provided job ID
        Job job = jobService.getJob(jobId);

        // Check whether this email has already applied for this job
        if (applicationRepository.existsByJob_IdAndEmailIgnoreCase(
                jobId,
                application.getEmail())) {

            throw new IllegalArgumentException(
                    "This email has already applied for this job.");
        }

        // Connect the application to the job
        application.setJob(job);

        // Save the application
        return applicationRepository.save(application);
    }

    public List<JobApplication> getApplications(Long jobId) {

        // Check whether the job exists
        jobService.getJob(jobId);

        // Find applications using the related job's ID
        return applicationRepository.findByJob_Id(jobId);
    }
}