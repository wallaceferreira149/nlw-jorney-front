package dev.arcanus.api.activity.useCases;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.activity.dto.ActivityCreateDTO;
import dev.arcanus.api.activity.dto.ActivityDTO;
import dev.arcanus.api.activity.entities.Activity;
import dev.arcanus.api.activity.repositories.ActivityRepository;
import dev.arcanus.api.trip.entities.Trip;
import dev.arcanus.api.trip.repositories.TripRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CreateActivityUseCase {

    private final ActivityRepository activityRepository;
    private final TripRepository tripRepository;

    public List<ActivityDTO> execute(UUID tripId, ActivityCreateDTO dto) {
        Trip trip = tripRepository.getReferenceById(tripId);

        if (trip == null) {
            return null;
        } else {
            Activity createdActivity = new Activity(dto);
            createdActivity.setTrip(trip);
            activityRepository.save(createdActivity);
            List<ActivityDTO> activities = activityRepository.findAll().stream()
                    .map(activity -> new ActivityDTO(
                            activity.getId(),
                            activity.getTitle(),
                            activity.getOccursAt()))
                    .toList();
            return activities;
        }
    }

}
