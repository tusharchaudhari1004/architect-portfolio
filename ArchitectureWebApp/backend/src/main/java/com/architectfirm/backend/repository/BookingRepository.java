package com.architectfirm.backend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.architectfirm.backend.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
