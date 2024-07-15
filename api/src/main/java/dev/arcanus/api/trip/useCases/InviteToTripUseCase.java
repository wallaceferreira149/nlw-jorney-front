package dev.arcanus.api.trip.useCases;

import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.participant.dto.ParticipantCreateResponse;
import dev.arcanus.api.participant.services.ParticipantService;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InviteToTripUseCase {

  private final TripRepository tripRepository;
  private final ParticipantService participantService;

  public ParticipantCreateResponse execute(UUID tripId, String emailToInvite) {
    Trip trip = tripRepository.getReferenceById(tripId);
    // Optional<Trip> trip = tripRepository.findById(tripId);
    // Trip raw = trip.get();

    if (trip == null) {
      return null;
    } else {
      ParticipantCreateResponse participantResponse = participantService.registerParticipantToTrip(emailToInvite, trip);

      if (trip.isConfirmed()) {
        participantService.triggerConfirmationEmailToParticipant(emailToInvite);
      }
      return participantResponse;
    }
  }
}
