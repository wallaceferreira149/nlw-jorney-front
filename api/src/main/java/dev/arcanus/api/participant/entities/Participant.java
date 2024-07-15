package dev.arcanus.api.participant.entities;

import java.util.UUID;

import dev.arcanus.api.participant.dto.ParticipantRequestPayload;
import dev.arcanus.api.trip.entities.Trip;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "participants")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Participant {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;
  private String name;
  private String email;
  @Column(name = "is_confirmed", nullable = false)
  private Boolean isConfirmed;

  @ManyToOne
  @JoinColumn(name = "trip_id", nullable = false)
  private Trip trip;

  public Participant(ParticipantRequestPayload dto) {
    this.name = dto.name();
    this.email = dto.email();
    this.isConfirmed = false;
  }

  public Participant(String email, Trip trip) {
    this.email = email;
    this.trip = trip;
    this.isConfirmed = false;
    this.name = "";
  }

}
