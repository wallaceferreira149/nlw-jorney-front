package dev.arcanus.api.trip.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.arcanus.api.trip.entities.Trip;

@Repository
public interface TripRepository extends JpaRepository<Trip, UUID> {

}
