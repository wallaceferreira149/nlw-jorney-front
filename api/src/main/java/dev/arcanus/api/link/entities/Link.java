
package dev.arcanus.api.link.entities;

import dev.arcanus.api.link.dto.LinkCreateDTO;
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
@Table(name = "links")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Link {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String url;

  @Column(nullable = false)
  private String title;

  @ManyToOne
  @JoinColumn(name = "trip_id", nullable = false)
  private Trip trip;

  public Link(LinkCreateDTO dto, Trip trip) {
    this.url = dto.url();
    this.title = dto.title();
    this.trip = trip;
  }

}
