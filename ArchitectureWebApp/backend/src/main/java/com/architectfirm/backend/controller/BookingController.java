package com.architectfirm.backend.controller;

import java.util.List;
import com.architectfirm.backend.model.Booking;
import com.architectfirm.backend.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping("/create")
    public Booking createBooking(@RequestBody Booking booking)
    {
        return bookingRepository.save(booking);
    }

    @GetMapping("/all")
    public List<Booking> getAllBookings()
    {
        return bookingRepository.findAll();
    }
}
