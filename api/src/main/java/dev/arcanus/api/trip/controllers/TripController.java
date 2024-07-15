package dev.arcanus.api.trip.controllers;

import java.net.URI;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.arcanus.api.participant.dto.ParticipantCreateResponse;
import dev.arcanus.api.participant.dto.ParticipantDTO;
import dev.arcanus.api.participant.dto.ParticipantRequestPayload;
import dev.arcanus.api.participant.services.ParticipantService;
import dev.arcanus.api.trip.dto.TripCreateResponse;
import dev.arcanus.api.trip.dto.TripRequestPayload;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.useCases.ConfirmTripUseCase;
import dev.arcanus.api.trip.useCases.CreateTripUseCase;
import dev.arcanus.api.trip.useCases.FindTripByIdUseCase;
import dev.arcanus.api.trip.useCases.InviteToTripUseCase;
import dev.arcanus.api.trip.useCases.UpdateTripUseCase;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/trips")
@RequiredArgsConstructor
public class TripController {

  private final CreateTripUseCase createTripUseCase;
  private final FindTripByIdUseCase findTripByIdUseCase;
  private final UpdateTripUseCase updateTripUseCase;
  private final ConfirmTripUseCase confirmTripUseCase;
  private final InviteToTripUseCase inviteToTripUseCase;
  private final ParticipantService participantService;

  @PostMapping
  public ResponseEntity<TripCreateResponse> createTrip(@RequestBody TripRequestPayload payload) {
    TripCreateResponse tripResponse = createTripUseCase.execute(payload);
    URI path = URI.create("/trips/" + tripResponse.tripId());

    return ResponseEntity.created(path).body(tripResponse);
  }

  @GetMapping("/{tripId}")
  public ResponseEntity<Trip> getTripDetails(@PathVariable UUID tripId) {
    Trip foundTrip = findTripByIdUseCase.execute(tripId);
    if (foundTrip == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    return ResponseEntity.ok(foundTrip);
  }

  @PutMapping("/{tripId}")
  public ResponseEntity<Trip> updateTrip(@PathVariable UUID tripId, @RequestBody TripRequestPayload payload) {

    Trip updatedTrip = updateTripUseCase.execute(payload, tripId);
    if (updatedTrip == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    return ResponseEntity.ok(updatedTrip);
  }

  @GetMapping("/{tripId}/confirm")
  public ResponseEntity<Trip> confirmTrip(@PathVariable UUID tripId) {
    Trip trip = confirmTripUseCase.execute(tripId);

    if (trip == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    return ResponseEntity.ok(trip);
  }

  @PostMapping("/{tripIp}/invite")
  public ResponseEntity<ParticipantCreateResponse> inviteParticipantToTrip(
      @RequestBody ParticipantRequestPayload payload,
      @PathVariable UUID tripIp) {

    ParticipantCreateResponse participant = inviteToTripUseCase.execute(tripIp, payload.email());

    if (participant == null) {
      ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    return ResponseEntity.ok(participant);
  }

  @GetMapping("/{tripId}/participants")
  public ResponseEntity<List<ParticipantDTO>> getAllParticipants(@PathVariable UUID tripId) {
    List<ParticipantDTO> participants = participantService.getAllParticipantsFromTrip(tripId);
    
    return ResponseEntity.ok(participants);
  }
  

}
