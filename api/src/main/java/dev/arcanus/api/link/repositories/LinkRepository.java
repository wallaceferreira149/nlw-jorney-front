package dev.arcanus.api.link.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.arcanus.api.link.entities.Link;

@Repository
public interface LinkRepository extends JpaRepository<Link, Long> {
  List<Link> findByTripId(UUID id);
}
