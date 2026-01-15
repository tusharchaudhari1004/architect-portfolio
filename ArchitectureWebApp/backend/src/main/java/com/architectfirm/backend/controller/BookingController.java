package com.architectfirm.backend.controller;

import java.util.List;
import com.architectfirm.backend.model.Booking;
import com.architectfirm.backend.repository.BookingRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(
        origins = "http://localhost:3000",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.OPTIONS}
)
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping("/create")
    public Booking createBooking(@Valid @RequestBody Booking booking)
    {
        return bookingRepository.save(booking);
    }

    @DeleteMapping("/delete/{id}"   )
    public String deleteBooking(@PathVariable String id) {

        if (!bookingRepository.existsById(id)) {
            return "Booking with ID " + id + " does not exist.";
        }

        bookingRepository.deleteById(id);
        return "Booking deleted successfully!";
    }

    @GetMapping("/all")
    public List<Booking> getAllBookings()
    {
        return bookingRepository.findAll();
    }
}
