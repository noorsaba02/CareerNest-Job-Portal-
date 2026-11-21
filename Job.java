package com.example.jobportal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;
    @NotBlank
    private String company;
    @NotBlank
    private String location;

    @Column(length = 3000)
    private String description;

    private LocalDateTime postedAt = LocalDateTime.now();

    public Job() {}
    public Job(String title, String company, String location, String description) {
        this.title = title; this.company = company; this.location = location;
        this.description = description; this.postedAt = LocalDateTime.now();
    }
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public LocalDateTime getPostedAt() { return postedAt; }
}
