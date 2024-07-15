package dev.arcanus.api.trip.useCases;

import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.participant.services.ParticipantService;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ConfirmTripUseCase {

  private final TripRepository tripRepository;
  private final ParticipantService participantService;

  public Trip execute(UUID tripId) {
    Trip trip = tripRepository.getReferenceById(tripId);

    if (trip == null) {
      return null;
    } else {
      trip.setConfirmed(true);
      participantService.triggerConfirmationEmailToParticipants(tripId);
      return tripRepository.save(trip);
    }
  }
}
