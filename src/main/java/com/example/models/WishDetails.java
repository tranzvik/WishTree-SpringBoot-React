package com.example.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;

@Entity
public class WishDetails {

    @Id
    int wishId;

    @Column(nullable = false)
    String wishDetails;

    @Column(nullable = true)
    int employeeId;

    @Column(nullable = true)
    String employeeName;

    @Column(nullable = true)
    String emailId;

    @Column(nullable = true)
    long phoneNumber;

    @NotNull
    boolean wishTaken;

    public int getWishId() {
        return wishId;
    }

    public void setWishId(int wishId) {
        this.wishId = wishId;
    }

    public String getWishDetails() {
        return wishDetails;
    }

    public void setWishDetails(String wishDetails) {
        this.wishDetails = wishDetails;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isWishTaken() {
        return wishTaken;
    }

    public void setWishTaken(boolean wishTaken) {
        this.wishTaken = wishTaken;
    }

}
