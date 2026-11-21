
package com.example.jobportal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;

    @NotBlank
    private String applicantName;

    @Email
    @NotBlank
    private String email;

    private String resumeUrl;

    private LocalDateTime appliedAt = LocalDateTime.now();

    public JobApplication() {
    }

    public JobApplication(Job job, String applicantName,
                          String email, String resumeUrl) {
        this.job = job;
        this.applicantName = applicantName;
        this.email = email;
        this.resumeUrl = resumeUrl;
        this.appliedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public Job getJob() {
        return job;
    }

    public Long getJobId() {
        return job == null ? null : job.getId();
    }

    public String getApplicantName() {
        return applicantName;
    }

    public String getEmail() {
        return email;
    }

    public String getResumeUrl() {
        return resumeUrl;
    }

    public LocalDateTime getAppliedAt() {
        return appliedAt;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setResumeUrl(String resumeUrl) {
        this.resumeUrl = resumeUrl;
    }
}
