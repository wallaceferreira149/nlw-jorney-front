package dev.arcanus.api.trip.entities;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

import dev.arcanus.api.trip.dto.TripRequestPayload;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "trips")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trip {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @Column(nullable = false)
  private String destination;

  @Column(name = "starts_at", nullable = false)
  private LocalDateTime startsAt;

  @Column(name = "ends_at", nullable = false)
  private LocalDateTime endsAt;

  @Column(name = "is_confirmed", nullable = false)
  private boolean isConfirmed;

  @Column(name = "owner_name", nullable = false)
  private String ownerName;

  @Column(name = "owner_email", nullable = false)
  private String ownerEmail;

  public Trip(TripRequestPayload dto) {
    this.destination = dto.destination();
    this.startsAt = LocalDateTime.parse(dto.starts_at(), DateTimeFormatter.ISO_DATE_TIME);
    this.endsAt = LocalDateTime.parse(dto.ends_at(), DateTimeFormatter.ISO_DATE_TIME);
    this.ownerEmail = dto.owner_email();
    this.ownerName = dto.owner_name();
    this.isConfirmed = false;
  }

}
