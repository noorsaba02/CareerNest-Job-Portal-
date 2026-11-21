package com.example.jobportal.controller;

import com.example.jobportal.model.Job;
import com.example.jobportal.model.JobApplication;
import com.example.jobportal.service.JobService;
import com.example.jobportal.service.ApplicationService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {
    private final JobService jobService;
    private final ApplicationService applicationService;

    public JobController(JobService jobService, ApplicationService applicationService) {
        this.jobService = jobService; this.applicationService = applicationService;
    }

    @GetMapping
    public List<Job> getJobs(@RequestParam(required = false) String keyword,
                             @RequestParam(required = false) String location) {
        return jobService.getJobs(keyword, location);
    }

    @GetMapping("/{id}")
    public Job getJob(@PathVariable Long id) { return jobService.getJob(id); }

    @PostMapping
    public Job createJob(@Valid @RequestBody Job job) { return jobService.createJob(job); }

    @PostMapping("/{id}/applications")
    public JobApplication apply(@PathVariable Long id, @Valid @RequestBody JobApplication application) {
        return applicationService.apply(id, application);
    }

    @GetMapping("/{id}/applications")
    public List<JobApplication> getApplications(@PathVariable Long id) {
        return applicationService.getApplications(id);
    }
}
