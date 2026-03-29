package com.kuheli.backend.repository;

import com.kuheli.backend.model.Scan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScanRepository extends JpaRepository<Scan, Long> {}