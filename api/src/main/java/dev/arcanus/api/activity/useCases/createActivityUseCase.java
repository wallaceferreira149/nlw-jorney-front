package dev.arcanus.api.activity.useCases;

import java.util.UUID;

import org.springframework.stereotype.Service;

import dev.arcanus.api.activity.entities.Activity;
import dev.arcanus.api.activity.repositories.ActivityRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class createActivityUseCase {

    private final ActivityRepository activityRepository;

    public Activity execute(UUID tripId, ActivityCreateDTO dto) {
        
    }
    
}
