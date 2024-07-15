package dev.arcanus.api.participant.dto;

import java.util.UUID;

public record ParticipantDTO(
    UUID id,
    String name,
    String email,
    Boolean isConfirmed
) {
    
}
