package dev.arcanus.api.participant.services;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.participant.dto.ParticipantCreateResponse;
import dev.arcanus.api.participant.dto.ParticipantRequestPayload;
import dev.arcanus.api.participant.entities.Participant;
import dev.arcanus.api.participant.repositories.ParticipantRepository;
import dev.arcanus.api.trip.entities.Trip;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParticipantService {

  private final ParticipantRepository participantRepository;

  public void registerParticipantsToTrip(
      List<String> participantsToInvite,
      Trip trip) {

    List<Participant> participants = participantsToInvite.stream()
        .map(email -> new Participant(email, trip)).toList();

    participantRepository.saveAll(participants);
    System.out.println("Participants: " + participants);
  }

  public ParticipantCreateResponse registerParticipantToTrip(String email, Trip trip) {
    Participant newParticipant = new Participant(email, trip);

    participantRepository.save(newParticipant);

    return new ParticipantCreateResponse(newParticipant.getId());
  }

  public void triggerConfirmationEmailToParticipants(UUID tripId) {
  }

  public void triggerConfirmationEmailToParticipant(String email) {

  }

  public Participant confirmParticipant(
      UUID participantId,
      ParticipantRequestPayload payload) {
    Participant participant = participantRepository.getReferenceById(participantId);

    if (participant == null) {
      return null;
    } else {
      participant.setName(payload.name());
      participant.setIsConfirmed(true);

      return participantRepository.save(participant);
    }
  }

}
