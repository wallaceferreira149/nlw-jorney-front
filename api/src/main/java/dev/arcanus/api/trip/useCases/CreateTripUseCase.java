package dev.arcanus.api.trip.useCases;

import org.springframework.stereotype.Service;

import dev.arcanus.api.participant.services.ParticipantService;
import dev.arcanus.api.trip.dto.TripCreateResponse;
import dev.arcanus.api.trip.dto.TripRequestPayload;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CreateTripUseCase {

  private final ParticipantService participantService;
  private final TripRepository tripRepository;

  public TripCreateResponse execute(TripRequestPayload payload) {
    Trip newTrip = new Trip(payload);

    this.tripRepository.save(newTrip);
    this.participantService.registerParticipantsToTrip(
        payload.emails_to_invite(),
        newTrip);

    TripCreateResponse tripResponse = new TripCreateResponse(newTrip.getId());
    return tripResponse;
  }
}
