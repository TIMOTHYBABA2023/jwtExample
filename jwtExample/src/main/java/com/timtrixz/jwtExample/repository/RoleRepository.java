package com.timtrixz.jwtExample.repository;

import com.timtrixz.jwtExample.models.ERole;
import com.timtrixz.jwtExample.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(ERole name);
}
