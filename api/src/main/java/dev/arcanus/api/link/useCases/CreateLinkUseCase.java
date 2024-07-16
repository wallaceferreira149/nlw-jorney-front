package dev.arcanus.api.link.useCases;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.link.dto.LinkCreateDTO;
import dev.arcanus.api.link.dto.LinkDTO;
import dev.arcanus.api.link.entities.Link;
import dev.arcanus.api.link.repositories.LinkRepository;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CreateLinkUseCase {

  private final LinkRepository linkRepository;
  private final TripRepository tripRepository;

  public List<LinkDTO> execute(UUID tripId, LinkCreateDTO dto) {
    Trip trip = tripRepository.getReferenceById(tripId);
    if (trip == null) {
      return null;
    } else {
      Link createdLink = new Link(dto, trip);
      linkRepository.save(createdLink);
      List<LinkDTO> links = linkRepository.findByTripId(tripId).stream()
          .map(link -> new LinkDTO(link.getId(), link.getUrl(), link.getTitle())).toList();

      return links;
    }
  }
}
