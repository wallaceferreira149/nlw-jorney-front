package dev.arcanus.api.activity.useCases;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.activity.dto.ActivityDTO;
import dev.arcanus.api.activity.repositories.ActivityRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetAllActivitiesUseCase {

  private final ActivityRepository activityRepository;

  public List<ActivityDTO> execute(UUID tripId) {
    List<ActivityDTO> activities = activityRepository.findAll().stream()
        .map(activity -> new ActivityDTO(
            activity.getId(), activity.getTitle(), activity.getOccursAt()))
        .toList();
    if (activities == null) {
      return null;
    } else {
      return activities;
    }
  }
}
