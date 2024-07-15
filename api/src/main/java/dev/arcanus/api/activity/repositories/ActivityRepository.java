package dev.arcanus.api.activity.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.arcanus.api.activity.entities.Activity;

public interface ActivityRepository extends JpaRepository<Activity, UUID>{
    
}
