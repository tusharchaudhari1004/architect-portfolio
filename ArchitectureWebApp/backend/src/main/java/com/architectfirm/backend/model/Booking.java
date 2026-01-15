package com.architectfirm.backend.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.boot.actuate.endpoint.jmx.JmxEndpointsSupplier;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "bookings")
public class Booking {

    @Id
    private String id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Phone Number is required")
    private String phone;

    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Date is required")
    private String date;

    @NotBlank(message = "Project type is required")
    private String projectType;

    @NotBlank(message = "Budget is required")
    private String budget;

    @NotBlank(message = "Time is required")
    private String time;


    private String message;


    public Booking(){}

    public Booking(String name, String phone, String email, String date, String message) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.date = date;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getProjectType() { return projectType; }
    public void setProjectType(String projectType) { this.projectType = projectType; }

    public String getBudget() { return budget; }
    public void setBudget(String budget) { this.budget = budget; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;

    }
}
