package dev.arcanus.api.participant.controllers;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.arcanus.api.participant.dto.ParticipantRequestPayload;
import dev.arcanus.api.participant.entities.Participant;
import dev.arcanus.api.participant.services.ParticipantService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(("/participants"))
@RequiredArgsConstructor
public class ParticipantController {

  private final ParticipantService participantService;

  @PostMapping("/{id}/confirm")
  public ResponseEntity<Participant> confirmTrip(
      @PathVariable UUID id,
      @RequestBody ParticipantRequestPayload payload) {
    Participant participant = participantService.confirmParticipant(id, payload);
    if (participant == null) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
    return ResponseEntity.ok(participant);
  }

}
