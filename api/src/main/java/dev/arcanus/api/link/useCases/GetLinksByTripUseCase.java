package dev.arcanus.api.link.useCases;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.link.dto.LinkDTO;
import dev.arcanus.api.link.repositories.LinkRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetLinksByTripUseCase {

  private final LinkRepository linkRepository;

  public List<LinkDTO> execute(UUID trip_id) {
    List<LinkDTO> links = linkRepository.findByTripId(trip_id).stream()
        .map(link -> new LinkDTO(link.getId(), link.getTitle(), link.getUrl())).toList();
    if (links == null) {
      return null;
    }
    return links;
  }
}
