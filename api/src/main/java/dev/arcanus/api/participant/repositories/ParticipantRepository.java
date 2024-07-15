package dev.arcanus.api.participant.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.arcanus.api.participant.entities.Participant;


@Repository
public interface ParticipantRepository extends JpaRepository<Participant, UUID> {

    List<Participant> findByTripId(UUID id);
}
