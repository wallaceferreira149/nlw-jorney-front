package dev.arcanus.api.trip.useCases;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.trip.dto.TripRequestPayload;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UpdateTripUseCase {

  private final TripRepository tripRepository;

  public Trip execute(TripRequestPayload payload, UUID id) {
    Trip trip = tripRepository.getReferenceById(id);

    if (trip == null) {
      return null;
    } else {
      trip.setDestination(payload.destination());
      trip.setStartsAt(LocalDateTime.parse(payload.starts_at(), DateTimeFormatter.ISO_DATE_TIME));
      trip.setEndsAt(LocalDateTime.parse(payload.ends_at(), DateTimeFormatter.ISO_DATE_TIME));

      return tripRepository.save(trip);
    }

  }

}
