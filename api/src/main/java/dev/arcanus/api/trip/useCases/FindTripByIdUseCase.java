package dev.arcanus.api.trip.useCases;

import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FindTripByIdUseCase {

  private final TripRepository tripRepository;

  public Trip execute(UUID id) {
    Optional<Trip> trip = tripRepository.findById(id);
    if (trip.isPresent()) {
      return trip.get();
    } else {
      return null;
    }
  }

}
